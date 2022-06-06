
//I learned the code from youtube https://youtu.be/MtYR2vCs2R0
const circle = document.querySelector(".walker");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
//improve circular moving of the time
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}