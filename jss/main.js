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
let fiveMinInSeconds = (300)
let tenMinInSeconds = (600)
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
            //render(); 
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
    fiveMinInSeconds = 300
    clearInterval(timerInterval)
    render(timerElFive, fiveMinInSeconds)
    ocean.pause()
    return timerInterval = null
})

resetBtnTen.addEventListener('click', () => {
    clearInterval(timerInterval)
    tenMinInSeconds = 600
    clearInterval(timerInterval)
    render(timerElTen, tenMinInSeconds)
    ocean.pause()
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

function startTimer() {
    clearInterval(timerInterval)
    timerInterval = setInterval(tick, 1000)
    ocean.play()
}

function startTimerTen() {
    clearInterval(timerInterval)
    timerInterval = setInterval(tickTen, 1000)
    ocean.play()
}

function tick() {

    fiveMinInSeconds--
    if (fiveMinInSeconds === (0)) {
        clearInterval(timerInterval)
        //this is where I want to put the ding 
        ding.play()
        //pauses sound when timer hits
        ocean.pause()
            //try to get all same file type...mp3 or ogg
            //audioVar.play()
        
    }
    render(timerElFive,fiveMinInSeconds);
}

function tickTen() {
    tenMinInSeconds--
    if (tenMinInSeconds === (0)) {
        clearInterval(timerInterval)
        ding.play()
        ocean.pause()
    }
    render(timerElTen, tenMinInSeconds)
}

//five minute
function render(htmlElement, seconds) {
    let min = Math.floor(seconds / 60)
    let sec = seconds % 60
    if (sec < 10) {
        htmlElement.innerText = `${min}:0${sec}`
    } else {
        htmlElement.innerText = `${min}:${sec}`
    }
}

