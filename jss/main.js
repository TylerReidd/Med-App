//cached element references
const startBtn = document.getElementById('start')
//change innerTEXT of timerEl
const timerElFive = document.getElementById('five-btn')
const timerElTen = document.getElementById('ten-btn')
const secBar = document.getElementById('seconds')
const minBar = document.getElementById('minutes')
const resetBtn = document.getElementById('resetButton')
const resetBtnTen = document.getElementById('resetButtonTen')

//variables
let timerInterval
let min, sec, seconds = (300)
let minTen, secTen, secondsTen = (600)
//event listener 
  //click start button begin  5 min countdown
   timerElFive.addEventListener('click', ()=> {
        if(timerInterval){
          clearInterval(timerInterval)
          return timerInterval = null
        }
        console.log(startTimer())
    })

    timerElFive.addEventListener('click', ()=>{
        fetch("https://api.adviceslip.com/advice")
        .then((response) =>{
            return response.json()
        })
        .then((data)=>{
          let newQuote = {}
          newQuote.quote = data.slip.advice
            quotes.push(newQuote)
            render()
        })
        .catch((err)=>{
            console.log(err)
        })
     })

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
        if(timerInterval){
            clearInterval(timerInterval)
            return timerInterval = null
        }
        startTimerTen()
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
        //five minute
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
//     fetch("https://healthruwords.p.rapidapi.com/v1/quotes/?id=731&t=Wisdom&maxR=1&size=medium", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "healthruwords.p.rapidapi.com",
// 		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });
    
    
//     if (timerInterval){
//         clearInterval(timerInterval)
//         return timerInterval = null
//     }
//     startTimer()
// })

// tenButton.addEventListener('click', () =>{
    // fetch("https://healthruwords.p.rapidapi.com/v1/quotes/?id=731&t=Wisdom&maxR=1&size=medium", {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "healthruwords.p.rapidapi.com",
    //         "x-rapidapi-key": "SIGN-UP-FOR-KEY"
    //     }
    // })
    // .then(response => {
    //     console.log(response);
    // })
    // .catch(err => {
    //     console.log(err);
    // });

// })









// function tick(){
//     //seconds-- count downwards
//     seconds--
//     console.log(seconds)
//     if (seconds === 0){
//         clearInterval(timerInterval)
//     }
//     render()
// }

// function startTimer(){
//     clearInterval(timerInterval)
//     timerInterval = setInterval(tick, 1000)
// }


// function render() {
//     min = Math.floor(seconds / 60);
//     sec = seconds % 60;
//     if (sec < 10) {
//         timerEl.innerText = `${min}:0${sec}`
//     } else {
//         timerEl.innerText = `${min}:${sec}`
//     }
//     // secBar.style = `width: ${sec/60*100}%`
//     // secBar.innerText = sec;
//     // minBar.style = `width: ${(min/60*100)%60}%`
//     // minBar.innerText = min;
//     // hrBar.style = `width: ${(hr/24*100)%24}%`
//     // hrBar.innerText = hr;
// }







  


//   //function
// //I want to use THIS function to set the timer to count backwards by 1 second (1000ms)
// // setInterval(() => {
// //     if(counter === 0){
// //         return
// //     }
// // }, 1000);




// // function tick(){
// //     seconds--
// //     console.log(seconds)
// //     if (seconds === 0){
// //         clearInterval(timerInterval)
// //     }
// //     render()
// // }

// //   function startTimer(){
// // clearInterval(timerInterval)
// // timerInterval = setInterval(tick, 1000)
// //   }




// //   function render() {
    
// //     }
  