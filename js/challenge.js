document.addEventListener("DOMContentLoaded", () => {

})
let timerVariable = setInterval(countUpTimer, 1000)
let totalSeconds = 0 
let lastClicked
let e
function countUpTimer(){
    ++ totalSeconds
    document.getElementById('counter').innerText = totalSeconds
}

const minus = document.getElementById('minus')
minus.addEventListener('click', function(){
    -- totalSeconds
// console.log("I'm trying to subtract!")
let clock = document.getElementById('counter').innerText= totalSeconds

})

const plus = document.getElementById('plus')
plus.addEventListener('click', function(){
    ++ totalSeconds

    let clock = document.getElementById('counter').innerText = totalSeconds
})

const heart = document.getElementById('heart')
heart.addEventListener('click', function(){
    const ul = document.querySelector('ul.likes')
   const li = document.createElement('li')
   
    if(totalSeconds === lastClicked){
       
        li.textContent= `${totalSeconds} has been liked ${e+=1} times`
    }
    else{
        e=1
        lastClicked = totalSeconds
        li.textContent=`${totalSeconds} has been liked ${e} time`
    }
    ul.appendChild(li)

    
})

const pause = document.querySelector('#pause')
pause.addEventListener('click', function(){
    if(pause.innerText === 'resume'){
        pause.innerText = 'pause'
        timerVariable = setInterval(countUpTimer, 1000)
    }
    else {
        pause.innerText = 'resume'
        clearInterval(timerVariable)
     }
})
 
const form = document.getElementById('comment-form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e)
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    const div = document.querySelector(".comments")
    console.log(div)
    div.appendChild(ul)
    const value = document.getElementById('comment-input').value
    console.log(value)
    li.innerText = value
    ul.appendChild(li)
})