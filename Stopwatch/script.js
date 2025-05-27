const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let elapedtime = 0;
let timeInterval;

function formatTime(ms) {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor(ms / (1000 * 60 * 60));

  const pad = (num) => String(num).padStart(2, "0");

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
function updateDispaly() {
  timeDisplay.textContent = formatTime(elapedtime);
}

startBtn.addEventListener("click", () => {
  console.log("click");
  timeInterval = setInterval(() => {
    elapedtime += 1000;
    updateDispaly();
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});
stopBtn.addEventListener("click",()=>{
    clearInterval(timeInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
})
resetBtn.addEventListener("click",()=>{
    clearInterval(timeInterval);
    elapedtime = 0;
    updateDispaly()
    startBtn.disabled = false;
    stopBtn.disabled = true;

})
updateDispaly();
