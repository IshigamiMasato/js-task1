const timeElement = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let time = 0;

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
   $("#start").prop("disabled", true);
   $("#stop").prop("disabled", false);
   $("#reset").prop("disabled", false);
   intervalId = setInterval(function(){
      time += 100;
      updateTime();
    }, 100);
} );

stop.addEventListener('click', function() {
    $("#stop").prop("disabled", true);
    $("#start").prop("disabled", false);
    clearInterval(intervalId)
});

reset.addEventListener('click', function(){
  $("#reset").prop("disabled", true);
  time = 0;
  updateTime()
});
