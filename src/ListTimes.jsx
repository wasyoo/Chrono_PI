import React from 'react';
import convertTime from './shared/convertTime';

function ListTime({ listTimes }) {
  return (
    <ul className="list-group mt-4">
      {
        listTimes.map(time => {
          const { hours, minutes, seconds } = convertTime(time);
          return (
            <li className="list-group-item" >
              {hours.padStart(2, "0")}<em>h</em> : 
              {minutes.padStart(2, "0")}<em>m</em> : 
              {seconds.padStart(2, "0")}<em>s</em>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ListTime;
