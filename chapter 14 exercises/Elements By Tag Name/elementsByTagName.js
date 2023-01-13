function getElementsByTagName(node, tag) {
    let array = []
    for (let elementNode of Array.from(node.children)) {
        if(elementNode.nodeName.toLowerCase() == tag) {
          array.push(elementNode)
        } 
        array = array.concat(getElementsByTagName(elementNode, tag))
        
      }
    return array
}

console.log(getElementsByTagName(document.body, "p"))