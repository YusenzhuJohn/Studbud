// select the focusTime in index.html
//I learned the code from youtube https://youtu.be/MtYR2vCs2R0
const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");
const pauseBtn = document.querySelector(".pause");
//to storage the time setting by the users
focusTimeInput.value = localStorage.getItem("focusTime");
breakTimeInput.value = localStorage.getItem("breakTime");
document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    localStorage.setItem("focusTime", focusTimeInput.value);
    localStorage.setItem("breakTime", breakTimeInput.value);
});
document.querySelector(".reset").addEventListener("click", ()=>{
    startBtn.style.transform = "scale(1)";
    clearTimeout(initial);
    setProgress(0);
    mindiv.textContent = 0;
    secdiv.textContent = 0;
});

//# sourceMappingURL=index.1d671009.js.map
