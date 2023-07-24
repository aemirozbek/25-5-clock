import { useState } from "react";


function App() {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timeLeft, setTimeLeft] = useState({minutes: sessionLength, seconds: 0})
  let start, time, minutes, seconds

  function handleStartStop(sessionLengthParameter) {
    start = Date.now()
    timerFunction(sessionLengthParameter*60)
  }
  function timerFunction(sessionLengthParameter) {
    setInterval(() => {
      time = sessionLengthParameter - (((Date.now() - start)/1000).toFixed(0))
      minutes = Math.floor(time/60)
      seconds = time-(minutes*60)
      setTimeLeft(
        {
          minutes: minutes,
          seconds: seconds
        }
      ) 
    }, 1000);
  }
console.log(timeLeft)

  return (
    <div className="App">
      <div id="break-label">{"Break Length"}</div>
      <button id="break-decrement" onClick={()=>{setBreakLength(prev=>prev>1 ? prev-1 : prev)}}>-</button>
      <div id="break-length">{breakLength}</div>
      <button id="break-increment" onClick={()=>{setBreakLength(prev=>prev<60 ? prev+1 : prev)}}>+</button>
      <div id="session-label">{"Session Length"}</div>
      <button id="session-decrement" onClick={()=>{setSessionLength(prev=>prev>1 ? prev-1 : prev)}}>-</button>
      <div id="session-length">{sessionLength}</div>
      <button id="session-increment" onClick={()=>{setSessionLength(prev=>prev<60 ? prev+1 : prev)}}>+</button>

      <div id="timer-label">{"Session"}</div>
      <div id="time-left">{timeLeft.seconds<10 ? `${timeLeft.minutes}:0${timeLeft.seconds}` : `${timeLeft.minutes}:${timeLeft.seconds}`}</div>


      <button id="start_stop" onClick={()=>handleStartStop(sessionLength)}>Start Stop</button>
      <button id="reset" onClick={()=>{setBreakLength(5); setSessionLength(25)}}>reset</button>
    </div>
  );
}

export default App;
