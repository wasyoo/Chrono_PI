import React from 'react';
import convertTime from './shared/convertTime';

function Chronometre({ timeSeconds }) {

  const { hours, minutes, seconds } = convertTime(timeSeconds);
  
  return (
    <div className="timer">
      {hours.padStart(2, "0")}<em>h</em> : 
      {minutes.padStart(2, "0")}<em>m</em> : 
      {seconds.padStart(2, "0")}<em>s</em>
    </div>
  )
}

export default Chronometre
