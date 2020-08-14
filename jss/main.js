//cached element references
//const startBtn = document.getElementById('start')
//change innerTEXT of timerEl
const timerElFive = document.getElementById('five-btn')
const timerElTen = document.getElementById('ten-btn')

const resetBtn = document.getElementById('resetButton')
const resetBtnTen = document.getElementById('resetButtonTen')
//THINKING: Do I need to create CER for inspirational quote?
const inspQuote = document.getElementById('quote')
const getJokes = document.getElementById('joke')
const randImg = document.getElementById('image')
//const ipsum = document.getElementsByTagName("body")[0].style.backgroundImage = "url(https://picsum.photos/500/700/?random)";

const rainforest = new Audio(`/audio/Rainforest.wav`)
const ding = new Audio(`/audio/ding.wav`)
const ocean = new Audio(`/audio/ocean-crickets.wav`)

//variables

let jokes = [];
let quotes = [];
let timerInterval
let fiveMinInSeconds = (300)
let tenMinInSeconds = (600)

//EVENT LISTENERS
timerElFive.addEventListener('click', function () {
    clickHandler(timerElFive)
})

timerElTen.addEventListener('click', () => {
    clickHandler(timerElTen)
})

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval)
    fiveMinInSeconds = 300
    clearInterval(timerInterval)
    render(timerElFive, fiveMinInSeconds)
    rainforest.pause()
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
//API connections
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

function getJoke() {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=racist,sexist")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let newJoke = {}
            newJoke.joke = data.joke
            console.log(newJoke)
            jokes.push(newJoke)
            getJokes.textContent = newJoke.joke
        })
        .catch((err) => {
            console.log(err)
        })
}
//FUNCTIONS


//click start button begin  5 min countdown
function startTimer(element) {
    if (element === timerElFive) {
        clearInterval(timerInterval)
        timerInterval = setInterval(tick, 1000)
        rainforest.play();
    } else if (element === timerElTen) {
        clearInterval(timerInterval);
        timerInterval = setInterval(tickTen, 1000)
        ocean.play();
    }
}

function getTimer(element) {
    if (timerInterval) {
        clearInterval(timerInterval)
        return timerInterval = null
    }
    startTimer(element);
}


function clickHandler(element) {
    getQuote();
    getTimer(element);
    getJoke();
}

function tick() {
    fiveMinInSeconds--
    if (fiveMinInSeconds === (0)) {
        clearInterval(timerInterval)
        //this is where I want to put the ding 
        ding.play()
        //pauses sound when timer hits zero
        rainforest.pause()
        //try to get all same file type...mp3 or ogg
        //audioVar.play()
    }
    render(timerElFive, fiveMinInSeconds);
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