import { useState } from 'react';
import './App.css';
import Chronometre from './Chronometre';
import ListTimes from './ListTimes';

function App() {
  const [timeSeconds, setTimeSeconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [intervalId, setIntervalId] = useState(false);
  const [listTimes, setListTimes] = useState([]);

  const startPause = () => {
    if (!timerOn) {
      const id = setInterval(() => {
        setTimeSeconds(prevTimeSeconds => prevTimeSeconds + 1);
        setIntervalId(id);
      },1000);
      setTimerOn(true);
    } else {
      clearInterval(intervalId);
      setTimerOn(false);
    }
  }

  const reset = () => {
    if (timerOn) {
      setListTimes(prevListTimer => [...prevListTimer, timeSeconds])
    } else {
      clearInterval(intervalId);
      setTimerOn(false);
      setTimeSeconds(0);
      setListTimes([]);
    }
  }

  return (
    <div className="App">
      <Chronometre timeSeconds={timeSeconds} />
      <button 
        className={timerOn ? "btn btn-primary" : "btn btn-success"}
        onClick={startPause}
      >
        {timerOn ? "Pause" : "Démarrer"}
      </button>
      <button 
        onClick={reset}
        className={timerOn ? "btn btn-secondary" : "btn btn-danger"}
      > 
      {timerOn ? "Retenir" : "Rénitialiser"}
      </button>
      <ListTimes listTimes={listTimes} />
    </div>
  );
}

export default App;
