//I learned the code from youtube https://youtu.be/MtYR2vCs2R0
const circle = document.querySelector(".walker");
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;
//improve circular moving of the time
// stroke dasharray like border style, 
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;
// strokedashoffset decreasing stroke dasharray would start to reveal shape
function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

//# sourceMappingURL=index.5a7071ee.js.map
