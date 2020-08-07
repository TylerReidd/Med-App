//cached element references
const startBtn = document.getElementById('start')
//change innerTEXT of timerEl
const timerEl = document.getElementById('timer')

//variables
let counter
let timerInterval
let min = 5
let sec = 0
let seconds = 0



//event listener 
  //click start button begin countdown
  startBtn.addEventListener('click', () => {
    //define function in here OR define function in global scope and call it after 
    //'click'
    }
    //call start counter function here 
})




function startTimer(){
    clearInterval(timerInterval)
    timerInterval = setInterval(tick, 1000)
}

  


  //function
//I want to use THIS function to set the timer to count backwards by 1 second (1000ms)
setInterval(() => {
    if(counter === 0){
        retir
    }
}, 1000);




function tick(){
    seconds--
    console.log(seconds)
    if (seconds === 0){
        clearInterval(timerInterval)
    }
    render()
}

  function startTimer(){
clearInterval(timerInterval)
timerInterval = setInterval(tick, 1000)
  }

  function render() {
    
    }
  