function asTabs(node) {
    let div = document.createElement('div')
    let children = Array.from(node.children)
    
    for (let element of children) {
        let pick = children[0]
        element == pick ? element.style.display = "block" : element.style.display = "none"
        
        
        if(element.nodeName != "SCRIPT") {
        let button = document.createElement('button')
        let text = element.getAttribute('data-tabname')
        button.textContent = text
        div.appendChild(button)

        button.addEventListener('click', event => {
            check(element, children, button)
        })
        }

        
    }

 document.body.insertBefore(div, document.body.firstChild)


 function check(element, children, button) {
   for (let child of children) {
    if (child == element)  child.style.display = "block"
    else child.style.display = "none"
   }

   for (let select of Array.from(div.children)) {
    if(select == button) select.className = "selected"
    else select.className = ""
   }
 }
 

}

asTabs(document.body)

