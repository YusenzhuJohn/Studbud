// select the focusTime in index.html
//I learned the code from youtube https://youtu.be/MtYR2vCs2R0
const el = document.querySelector(".clock");
const bell = document.querySelector("audio");
//give animation to the html of 0 and 0:0
const mindiv = document.querySelector(".mins");
const secdiv = document.querySelector(".secs");
const startBtn = document.querySelector(".start");
localStorage.setItem("btn", "focus");
let initial, totalsecs, perc, paused, mins, seconds;
startBtn.addEventListener("click", ()=>{
    let btn = localStorage.getItem("btn");
    if (btn === "focus") mins = +localStorage.getItem("focusTime") || 1;
    else mins = +localStorage.getItem("breakTime") || 1;
    //hide the start button if user clicks the start button.
    seconds = mins * 60;
    totalsecs = mins * 60;
    setTimeout(decremenT(), 60);
    startBtn.style.transform = "scale(0)";
    paused = false;
//after the timer is started, paused will be set to false
});
function decremenT() {
    mindiv.textContent = Math.floor(seconds / 60);
    secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
    if (circle.classList.contains("danger")) circle.classList.remove("danger");
    // asign setTimeout ot inial variable.
    if (seconds > 0) {
        perc = Math.ceil((totalsecs - seconds) / totalsecs * 100);
        setProgress(perc);
        seconds--;
        initial = window.setTimeout("decremenT()", 1000);
        if (seconds < 10) circle.classList.add("danger");
    } else {
        mins = 0;
        seconds = 0;
        bell.play();
        //seconds reaches 0 mins and seconds reset to 0 and bell will be played
        let btn = localStorage.getItem("btn");
        if (btn === "focus") {
            startBtn.textContent = "start break";
            startBtn.classList.add("break");
            localStorage.setItem("btn", "break");
        } else {
            startBtn.classList.remove("break");
            startBtn.textContent = "start focus";
            localStorage.setItem("btn", "focus");
        }
        startBtn.style.transform = "scale(1)";
    //starBin should be shown again.
    }
}

//# sourceMappingURL=index.eaf7dda5.js.map
