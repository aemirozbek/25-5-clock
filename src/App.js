import { useState, useRef } from "react";

  let running = false
  let switched = false
  let currentState = "Session"
  let start, time, minutes, seconds, totalTimeLeft

function App() {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [timeLeft, setTimeLeft] = useState({minutes: sessionLength, seconds: 0})
  const timerInterval = useRef(null)
  const audio = useRef(null)

  function handleStartStop(length) {
    if(running===false){
      running = true
      start = Date.now()
    } else running = false
    timerFunction(length)
  }
  function timerFunction(length) {
    if(running===true){
      if(switched===true){
        totalTimeLeft = length*60 //remember to convert minute to seconds
        switched = false
      } else {
        totalTimeLeft = (timeLeft.minutes*60) + timeLeft.seconds
      }
      timerInterval.current = setInterval(() => {
        time = totalTimeLeft - (((Date.now() - start)/1000).toFixed(0))
        minutes = Math.floor(time/60)
        seconds = time-(minutes*60)
        setTimeLeft(
          {
            minutes: minutes,
            seconds: seconds
          }
        )
        if(time<=0){
          clearInterval(timerInterval.current)
          audio.current.play()
          running = false
          setTimeout(() => {
            switchCurrentState(sessionLength, breakLength)
          }, 2000);
        }
      }, 200);
    } else {
      clearInterval(timerInterval.current);
    }
  }
  function handleReset() {
    audio.current.pause()
    audio.current.currentTime = 0
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft({minutes: 25, seconds: 0})
    if(running===true){handleStartStop(sessionLength)};
    currentState = "Session"
  }
  function breakDecrement() {
    if(breakLength>1 && running===false){
      setBreakLength(prev=>prev-1)
      if(currentState==="Break"){
        setTimeLeft({minutes: breakLength-1, seconds: 0})
      }
    }
  }
  function breakIncrement() {
    if(breakLength<60 && running===false){
      setBreakLength(prev=>prev+1)
      if(currentState==="Break"){
        setTimeLeft({minutes: breakLength+1, seconds: 0})
      }
    }
  }
  function sessionDecrement() {
    if(sessionLength>1 && running===false){
      setSessionLength(prev=>prev-1)
      if(currentState==="Session"){
        setTimeLeft({minutes: sessionLength-1, seconds: 0})
      }
    }
  }
  function sessionIncrement() {
    if(sessionLength<60 && running===false){
      setSessionLength(prev=>prev+1)
      if(currentState==="Session"){
        setTimeLeft({minutes: sessionLength+1, seconds: 0})
      }
    }
    
  }
  function switchCurrentState(sessionLengthParameter, breakLengthParameter) {
    switched = true;
    if(currentState==="Session"){
      currentState = "Break"
      setTimeLeft({minutes: breakLengthParameter, seconds: 0})
      handleStartStop(breakLengthParameter)
    } else {
      currentState = "Session"
      setTimeLeft({minutes: sessionLengthParameter, seconds: 0})
      handleStartStop(sessionLengthParameter)
    }
  }
  

  return (
    <div className="App">
      <div id="break-label">{"Break Length"}</div>
      <button id="break-decrement" onClick={breakDecrement}>-</button>
      <div id="break-length">{breakLength}</div>
      <button id="break-increment" onClick={breakIncrement}>+</button>
      <div id="session-label">{"Session Length"}</div>
      <button id="session-decrement" onClick={sessionDecrement}>-</button>
      <div id="session-length">{sessionLength}</div>
      <button id="session-increment" onClick={sessionIncrement}>+</button>

      <div id="timer-label">{currentState}</div>
      <div id="time-left">{timeLeft.minutes<10 && 0}{timeLeft.minutes}{":"}{timeLeft.seconds<10 && 0}{timeLeft.seconds}</div>
      <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" ref={audio}/>


      <button id="start_stop" onClick={()=>handleStartStop(sessionLength)}>Start Stop</button>
      <button id="reset" onClick={handleReset}>reset</button>
    </div>
  );
}

export default App;
