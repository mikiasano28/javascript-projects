// https://www.youtube.com/watch?v=2_4tEdyNfO0

// https://www.youtube.com/watch?v=P-l1u5nvfEc     this is another one

const input = document.querySelector("input"),
      showHide = document.querySelector(".show_hide"),
      indicator = document.querySelector(".indicator"),
      iconText = document.querySelector(".icon-text"),
      text = document.querySelector(".text");

// js code to show and hide password
showHide.addEventListener("click", () => {
    if(input.type === "password") {
        input.type = "text";
        showHide.classList.replace("fa-eye-slash", "fa-eye");
    }else {
        input.type = "password";
        showHide.classList.replace("fa-eye", "fa-eye-slash");
    }
});

let alphabet = /[a-zA-Z]/,  // letter a to z and A to Z
    number = /[0-9]/ ,       // numbers 0 to 9
    specialCharactors = /[]/



