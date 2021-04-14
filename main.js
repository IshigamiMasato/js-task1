const timeElement = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');



let time = 0;
let intervalId = null;

function updateTime() {
     
      const ms = Math.floor((time % 1000) / 100);
      const s = Math.floor(time / 1000) % 60;
      const m = Math.floor(time / (1000*60)) % 60;
      const h = Math.floor(time / (1000*60*60));

      const msStr = ms.toString().padStart(1, '0');
      const sStr = s.toString().padStart(2, '0');
      const mStr = m.toString().padStart(2, '0');
      const hStr = h.toString().padStart(2, '0');

      timeElement.innerHTML = `${hStr}:${mStr}:${sStr}:${msStr}`;
    };





start.addEventListener('click', function() {
    if (intervalId !== null){ return; }
   intervalId = setInterval(function(){
       
      time += 100;
      updateTime();
    }, 100);
} );


stop.addEventListener('click', function() {
    clearInterval(intervalId)
    intervalId = null;
});




reset.addEventListener('click', function(){
  time = 0;
  updateTime()
});
