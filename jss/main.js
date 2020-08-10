//cached element references
const startBtn = document.getElementById('start')
//change innerTEXT of timerEl
const timerElFive = document.getElementById('five-btn')
const timerElTen = document.getElementById('ten-btn')
//animated progress bars 
const secBar = document.getElementById('seconds')
const minBar = document.getElementById('minutes')

const resetBtn = document.getElementById('resetButton')
const resetBtnTen = document.getElementById('resetButtonTen')
//THINKING: Do I need to create CER for inspirational quote?
const inspQuote = document.getElementById('quote')

const randImg = document.getElementById('image')
//const ipsum = document.getElementsByTagName("body")[0].style.backgroundImage = "url(https://picsum.photos/500/700/?random)";

const ding = new Audio(`/audio/ding.wav`)
const ocean = new Audio(`/audio/ocean-crickets.wav`)

//variables
let quotes = [];
let timerInterval
let min, sec, seconds = (300)
let minTen, secTen, secondsTen = (600)
//event listener 
//click start button begin  5 min countdown
function getTimer() {
    if (timerInterval) {
        clearInterval(timerInterval)
        return timerInterval = null
    }
    startTimer();
}

function getQuote() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let newQuote = {}
            newQuote.quote = data.slip.advice;
            console.log(data.slip.advice);
            quotes.push(newQuote);
            console.log(quotes);
            render(); 
            inspQuote.textContent = newQuote.quote;
        })
        .catch((err) => {
            console.log(err)
        })
}

function getFiveTimerAndQuote(){
    getQuote();
    getTimer();

}

timerElFive.addEventListener('click', function(){getFiveTimerAndQuote()})


resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval)
    seconds = 300
    clearInterval(timerInterval)
    render()
    return timerInterval = null
})
resetBtnTen.addEventListener('click', () => {
    clearInterval(timerInterval)
    secondsTen = 600
    clearInterval(timerInterval)
    renderTen()
    return timerInterval = null
})

timerElTen.addEventListener('click', () => {
    if (timerInterval) {
        clearInterval(timerInterval)
        return timerInterval = null
    }
    startTimerTen(); 
    getQuote();
})

function tick() {
    seconds--
    if (seconds === (0)) {
        clearInterval(timerInterval)
        //this is where I want to put the ding 
        ding.play()
        //pauses sound when timer hits
        ocean.pause()
            //try to get all same file type...mp3 or ogg
            //audioVar.play()
        
    }
    render();
}

function startTimer() {
    clearInterval(timerInterval)
    timerInterval = setInterval(tick, 1000)
    ocean.play()
}
//five minute
function render() {
    min = Math.floor(seconds / 60)
    sec = seconds % 60
    if (sec < 10) {
        timerElFive.innerText = `${min}:0${sec}`
    } else {
        timerElFive.innerText = `${min}:${sec}`
    }
}

function tickTen() {
    secondsTen--
    if (secondsTen === (0)) {
        clearInterval(timerInterval)
        ding.play()
        ocean.pause()
    }
    renderTen()
}

function startTimerTen() {
    clearInterval(timerInterval)
    timerInterval = setInterval(tickTen, 1000)
    ocean.play()
    
}

function renderTen() {
    minTen = Math.floor(secondsTen / 60)
    secTen = secondsTen % 60
    if (secTen < 10) {
        timerElTen.innerText = `${minTen}:0${secTen}`
    } else {
        timerElTen.innerText = `${minTen}:${secTen}`
    }
}