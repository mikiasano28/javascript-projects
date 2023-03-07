// tps://www.youtube.com/watch?v=n5E_gxkLo6A

const pwShow = document.querySelector(".show");
const createPw = document.querySelector("#createPw");
const confirmPw = document.querySelector("#confirmPw");
const alertIcon = document.querySelector(".errorIcon");
const alertText = document.querySelector(".text");
const submitBtn = document.querySelector("#button");



// this code is for hide password
pwShow.addEventListener("click", () => {
    if((createPw.type === "password") && (confirmPw.type === "password")) {
        createPw.type = "text";
        confirmPw.type = "text";
        pwShow.classList.replace("fa-eye-slash", "fa-eye");
    }else {
        createPw.type = "password";
        confirmPw.type = "password";
        pwShow.classList.replace("fa-eye", "fa-eye-slash");
    }
});

// this code is to check and confirm input field's password
createPw.addEventListener("input", () => {
    let inputValue = createPw.value.trim();

    if(inputValue.length >= 8) {
        confirmPw.removeAttribute("disabled");
        submitBtn.removeAttribute("disabled");
        submitBtn.classList.add("active");
    }else {
        confirmPw.setAttribute("disabled", true);
        submitBtn.setAttribute("disabled", true);
        submitBtn.classList.remove("active");
        confirmPw.value = "";
        alertText.innerHTML = "Enter at least 8 characters";
        alertText.style.color = "#a6a6a6";
    }
});

submitBtn.addEventListener("click", () => {
    if(createPw.value === confirmPw.value) {
        alertText.innerHTML = "Password matched";
        alertIcon.style.display = "none";
        alertText.style.color = "#4070f4";
    }else {
        alertText.innerHTML = "Password didn't match";
        alertText.style.color = "#d93025";
        alertIcon.style.display = "block";
    }
})