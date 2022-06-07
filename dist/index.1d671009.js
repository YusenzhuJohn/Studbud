//I learned the code from youtube https://youtu.be/MtYR2vCs2R0
const studyTime = document.querySelector("#studyTime");
const restTime = document.querySelector("#restTime");
const pauseBtn = document.querySelector(".pause");
//to storage the time setting by the users
studyTime.value = localStorage.getItem("studyTime");
restTime.value = localStorage.getItem("restTime");
document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    localStorage.setItem("studyTime", studyTime.value);
    localStorage.setItem("restTime", restTime.value);
});
document.querySelector(".reset").addEventListener("click", ()=>{
    startBtn.style.transform = "scale(1)";
    clearTimeout(initial);
    setProgress(0);
    mindiv.textContent = 0;
    secdiv.textContent = 0;
});

//# sourceMappingURL=index.1d671009.js.map
