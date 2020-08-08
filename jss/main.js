//cached element references
const startBtn = document.getElementById('start')
//change innerTEXT of timerEl
const timerElFive = document.getElementById('five-btn')
const timerElTen = document.getElementById('ten-btn')
const secBar = document.getElementById('seconds')
const minBar = document.getElementById('minutes')
//variables
let timerInterval
let min, sec, seconds = (300)
let minTen, secTen, secondsTen = (600)
//event listener 
  //click start button begin  5 min countdown
   
  
  //FOR THE FIVE MINUTE TIMER
  timerElFive.addEventListener('click', ()=> {
        if(timerInterval){
          clearInterval(timerInterval)
          return timerInterval = null
        }
        console.log(startTimer())
    })
    //FOR THE API ON-CLICK OF FIVE MINUTE TIMER
    timerElFive.addEventListener('click', ()=>{
        fetch("https://api.adviceslip.com/advice")
        .then((response) =>{
            return response.json()
        })
        .then((data)=>{
          let newQuote = {}
          newQuote.quote = data.slip.advice
            document.appendChild(newQuote, quote)//quotes.push(newQuote)
            render()
        })
        .catch((err)=>{
            console.log(err)
        })
     })

    function tick(){
        seconds--
        if(seconds === (0)){
            clearInterval(timerInterval)
        }
        render()
    }

    function startTimer(){
        clearInterval(timerInterval)
    timerInterval = setInterval(tick, 1000)
    }
        //five minute render function
    function render() {
        min = Math.floor(seconds / 60) 
        sec = seconds % 60
        if(sec < 10) {
            timerElFive.innerText =`${min}:0${sec}`
        } else {
            timerElFive.innerText = `${min}:${sec}`
        }
        //BAR ANIMATION
        // secBar.style = `width: ${sec/60*100}%`
        // secBar.innerText = sec;
        // minBar.style = `width: ${(min/60*100)%60}%`
        // minBar.innerText = min
    }
//FOR THE TEN MINUTE TIMER
    timerElTen.addEventListener('click', () => {
        if(timerInterval){
            clearInterval(timerInterval)
            return timerInterval = null
        }
        startTimerTen()
    })

    function tickTen(){
        secondsTen--
        if(secondsTen === (0)){
            clearInterval(timerInterval)
        }
        renderTen()
    }

    function startTimerTen(){
        clearInterval(timerInterval)
    timerInterval = setInterval(tickTen, 1000)
    }


    function renderTen() {
        minTen = Math.floor(secondsTen / 60)
        secTen = secondsTen % 60
        if(secTen < 10) {
            timerElTen.innerText =`${minTen}:0${secTen}`
        } else {
            timerElTen.innerText = `${minTen}:${secTen}`
        }
    }


