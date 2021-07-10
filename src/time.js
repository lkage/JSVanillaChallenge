const timePrint = document.getElementById("time");
const datePrint = document.getElementById("date");
function clock() {
  const time = new Date();
  let mon = time.getMonth() + 1;
  let day = time.getDate();
  let hour = time.getHours();
  let min = String(time.getMinutes()).padStart(2, "0");
  let sec = String(time.getSeconds()).padStart(2, "0");
  datePrint.innerText = `${mon}월 ${day}일`;
  timePrint.innerText = `\n${hour}시 ${min} 분 ${sec}초`;
}
clock();
setInterval(clock, 1000);
