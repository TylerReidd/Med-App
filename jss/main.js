//cached element references
const startBtn = document.getElementById('start')
//change innerTEXT of timerEl
const timerEl = document.getElementById('timer')

//variables
let counter = 5




function startTimer(){
    let counter = 5000;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = counter;
      }
      if (counter === 0) {
          alert('Time Up! Congratulations);
          clearInterval(counter);
      }
    }, 1000);
  }
  function start()
  {
      document.getElementById("count").style="color:green;";
      startTimer();
  };

  //event listener 
  //click start button begin countdown
  addEventListener.getElementById('start')



  //function

  function render() {

  }