let balloon = document.createElement('p')
balloon.textContent = "🎈"
balloon.style.fontSize = 50 + 'px'
balloon.style.textAlign = "center"

document.body.appendChild(balloon)

window.addEventListener('keydown', increase)

function increase(event) {
    const size = Number(balloon.style.fontSize.replace(/px/, ''))
    console.log(size)
    if (event.key == "ArrowUp") {
        event.preventDefault()
        if (size < 170) {
            balloon.style.fontSize = (size + (0.1 * size)) + "px" 
        } else {
            balloon.textContent = '💥'
            window.removeEventListener('keydown', increase)
        } 
    }
    if (event.key == "ArrowDown") {
        event.preventDefault()
        balloon.style.fontSize = Math.max(50, (size - (0.1 * size))) + "px"
    }
}


// FOR TOUCHSCREENS
window.addEventListener('touchstart', touchIncrease)

function touchIncrease(event) {
    event.preventDefault()
    const size = Number(balloon.style.fontSize.replace(/px/, ''))
    if (size < 170) {
        balloon.style.fontSize = (size + (0.1 * size)) + "px" 
    } else {
        balloon.textContent = '💥'
        window.removeEventListener('touchstart', touchIncrease)
    } 
}
