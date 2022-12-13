function humanReadable (seconds) {
  const sec = ('0' + seconds % 60).slice(-2);
  const min = ('0' + parseInt((seconds / 60) % 60)).slice(-2);
  const hour = ('0' + parseInt(seconds / 3600)).slice(-2);

  const time = `${hour}:${min}:${sec}`;
  
  return time;
}

console.log(humanReadable(0));
console.log(humanReadable(59));
console.log(humanReadable(60));
console.log(humanReadable(61));
console.log(humanReadable(3598));
console.log(humanReadable(3600));
console.log(humanReadable(3601));