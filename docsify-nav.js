const remark = require("remark");
const {readFile} = require("fs").promises;
const {join} = require("path");

const SIDEBAR = "_sidebar.md"

/**
 * Converts a node and its children to their plain text value (excl. markdown)
 * @param {unist.Node} node
 * 
 * @returns {String} Node as plain text
 */
function text(node) {
    if(node.children) return node.children.map(text).join("")
    else return node.value;
}

/**
 * Extracts a topic ref (title -> url) mapping from the paragraph,
 * if its first child is a link.
 * 
 * @param {unist.Node} paragraph 
 * 
 * @returns {TopicNav|undefined} Topic ref or undefined if not found
 */
function topicRef(paragraph) {
    const [link] = paragraph.children;
    if(link.type !== "link") return;
    return {
        // Strip leading slash - this would make the path absolute
        [text(link.children[0])]: link.url.replace(/^\//, "")
    }
}

/**
 * Walks the AST and collects nav entries from list items
 * 
 * @param {*} ast AST to walk
 * @param {*} parentNav Parent nav item to fill with children (will be modified)
 * 
 * @returns {NavEntry[]} 
 */
function collect(ast, parentNav = []) {
    let nav = parentNav;
    if(ast.type === "listItem") {
        const [paragraph] = ast.children;
        const ref = topicRef(paragraph);
        if(ref) {
            nav.push(ref);
        } else {
            const title = text(paragraph);
            nav = [];
            parentNav.push({[title]: nav})
        }
    }
    if(ast.children) ast.children.forEach(c => collect(c, nav));
    return parentNav;
}

/**
 * Extracts nav from docsify `_sidebar.md`.
 * 
 * See https://github.wdf.sap.corp/D053411/cpmscf-docs-lib/blob/main/src/dita/plugin.ts
 * 
 * @param {DitaConverterOptions} opts
 * 
 * @returns {Promise<NavEntry[]>} Nav tree promise
 */
module.exports = async (opts) => {
    const processor = remark();
    const sidebar = await readFile(join(opts.path, SIDEBAR), "utf-8");
    const ast = await processor.parse(sidebar);
    const nav = collect(ast);
    return nav;
};