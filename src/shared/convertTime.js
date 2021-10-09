const convertTime = function(timeSeconds) {
  const seconds = String(Math.floor(timeSeconds % 60));
  const minutes = String(Math.floor((timeSeconds / 60) % 60));
  const hours = String(Math.floor(timeSeconds / 3600));
  return {
    seconds,
    minutes,
    hours
  }
}

export default convertTime;