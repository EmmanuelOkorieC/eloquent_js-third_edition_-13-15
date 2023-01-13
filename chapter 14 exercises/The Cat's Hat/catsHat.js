let cat = document.body.querySelector("#cat")
 let hat = document.body.querySelector('#hat')
 let angle = Math.PI 
 let angle2 = Math.PI * 2
   
   function animate(time, lastTime) {
    if(lastTime != null) {
         angle += (time - lastTime) * 0.001
         angle2 -= (time - lastTime) * 0.001
    }
    cat.style.left = 500 + (Math.cos(angle) * 200) + "px";
    cat.style.top = 200 + (Math.sin(angle) * 20) + "px";
    hat.style.left = 500 + (Math.cos(angle2) * 300) + "px";
    hat.style.top = 200 + (Math.sin(angle2) * 140) + "px";
    
    requestAnimationFrame(newTime => animate(newTime, time))
   }

   requestAnimationFrame(animate)