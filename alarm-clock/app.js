// https://www.youtube.com/watch?v=GvG_iMXjeUg

const currentTIme = document.querySelector("h1");
const selectMenu = document.querySelectorAll("select");
const content = document.querySelector(".content");
const selectAlarmBtn = document.querySelector("button");

let alarmTime;

for(let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() =>{
    // getting hour, mins, secs
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = "AMPM";

    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }

    // if hour value is 0, set this value to 12
    h = h == 0 ? h = 12 : h;
    // adding 0 before hour, min, sec if this value is less than 10
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTIme.innerHTML = `${h}:${m}:${s} ${ampm}`;

    if(alarmTime == `${h}:${m} ${ampm}`) {
        console.log("alarm ringing...");

    }


}, 1000);

function setAlarm() {
    // getting hour, mins, ampm select tag value
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;

    if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")){
        return alert("Please, select a valid time to set alarm");
    }
    alarmTime = time;
    content.classList.add("disable");
    selectAlarmBtn.innerHTML = "Clear Alarm";

}

selectAlarmBtn.addEventListener("click", setAlarm);



