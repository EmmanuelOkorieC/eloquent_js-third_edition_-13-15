for (let i = 0; i < 10; i++) {
    let div = document.createElement('div')
    div.className = "dot"
    document.body.appendChild(div)
}


let div = document.body.querySelectorAll('.dot')
let i = 0
window.addEventListener('mousemove', event => {
      div[i].style.top = (event.pageY - 5) + 'px'
      div[i].style.left = (event.pageX - 5) + "px"
      div[i].style.display = "block"
      i++
      i > (div.length - 1) ? i = 0 : i = i
    
})


//FOR TOUCHSCREENS
window.addEventListener('touchmove', event => {
    event.preventDefault()
   let events = event.touches[0]
    div[i].style.top = (events.pageY - 5) + 'px'
    div[i].style.left = (events.pageX - 5) + "px"
    div[i].style.display = "block"
    i++
    i > (div.length - 1) ? i = 0 : i = i
 
})