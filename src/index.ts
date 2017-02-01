export function nodeListToArray(nodeList:NodeList) : Node[]{
    return [].slice.call(nodeList);
}