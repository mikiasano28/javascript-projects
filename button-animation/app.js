let btn = document.querySelector(".button");
let spinIcon = document.querySelector(".spinner");
let btnText = document.querySelector(".btn-text");

btn.addEventListener("click", () => {
    btn.style.cursor = "wait";
    btn.classList.add("checked");
    spinIcon.classList.add("spin");
    btnText.textContent = "Loading";


    /* ===== 問題はもう一回押すと、もう一度文字がloadingになるが、iconは変化しない ===== */
    setTimeout(() => {
        btn.style.pointEvents = "none";
        spinIcon.classList.replace("spinner", "check");
        spinIcon.classList.replace("fa-circle-notch", "fa-check");
        btnText.textContent = "Done";
    }, 4000);
    
})