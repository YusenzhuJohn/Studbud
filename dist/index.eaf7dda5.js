// select the studyTime in index.html
//I learned code from youtube https://youtu.be/MtYR2vCs2R0
const clock = document.querySelector(".clock");
const audio = document.querySelector("audio");
//give animation to the html of 0 and 0:0
const mindiv = document.querySelector(".mins");
const secdiv = document.querySelector(".secs");
//start button click event
const startBtn = document.querySelector(".start");
localStorage.setItem("btn", "study");
let initial, totalsecs, perc, paused, mins, seconds;
// when the button clicked then get the item from btn item from local storage
startBtn.addEventListener("click", ()=>{
    let btn = localStorage.getItem("btn");
    // if btn is study then need the studyTime from localstorage
    // if btn is not study then it will be set to rest, then get the resttime from local storage
    // start timer with time limit
    // + converted number.
    if (btn === "study") mins = +localStorage.getItem("studyTime") || 1;
    else mins = +localStorage.getItem("restTime") || 1;
    //convert min to seconds
    seconds = mins * 60;
    totalsecs = mins * 60;
    setTimeout(decremenT(), 60);
    startBtn.style.transform = "scale(0)";
    paused = false;
// hide the start button if the user click
//after the timer is started, paused will be set to false
});
// 
function decremenT() {
    mindiv.textContent = Math.floor(seconds / 60);
    secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
    if (circle.classList.contains("danger")) circle.classList.remove("danger");
    // asign setTimeout ot inial variable. for pausing and reseting.
    if (seconds > 0) {
        perc = Math.ceil((totalsecs - seconds) / totalsecs * 100);
        setProgress(perc);
        seconds--;
        initial = window.setTimeout("decremenT()", 1000);
        // every second, decrementT will be called.
        // textContent for mins, secs will be reassigned, seconds will be devremented by 1 and later circular preogress will be set until seconds reach 0
        if (seconds < 10) circle.classList.add("danger");
    } else {
        mins = 0;
        seconds = 0;
        audio.play();
        //seconds reaches 0 mins and seconds reset to 0 and audio will be played
        let btn = localStorage.getItem("btn");
        // then it will get the btn from localstorage
        if (btn === "study") {
            startBtn.textContent = "start rest";
            startBtn.classList.add("rest");
            localStorage.setItem("btn", "rest");
        } else {
            startBtn.classList.remove("rest");
            startBtn.textContent = "start study";
            localStorage.setItem("btn", "study");
        }
        startBtn.style.transform = "scale(1)";
    //starBin should be shown again.
    }
}

//# sourceMappingURL=index.eaf7dda5.js.map
