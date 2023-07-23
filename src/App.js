import { useState } from "react";


function App() {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timeLeft, setTimeLeft] = useState({minutes: sessionLength*60, seconds: 0})
  const [timer, setTimer] = useState(0)
  let start

  function handleStartStop(sessionLengthParameter) {
    setTimeLeft(sessionLengthParameter)
    start = Date.now()
    timerFunction(sessionLengthParameter)
  }
  function timerFunction(sessionLengthParameter) {
    setInterval(() => {
      setTimeLeft(sessionLengthParameter - (((Date.now() - start)/1000).toFixed(0)))
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
      <div id="time-left">{sessionLength}</div>


      <button id="start_stop" onClick={()=>handleStartStop(sessionLength)}>Start Stop</button>
      <button id="reset" onClick={()=>{setBreakLength(5); setSessionLength(25)}}>reset</button>
    </div>
  );
}

export default App;
