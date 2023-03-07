'use strict';

{
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const giveaway = document.querySelector(".giveaway");
    const deadline = document.querySelector(".deadline");
    const items = document.querySelectorAll(".deadline-format h4");
    console.log(items);

    let futureDate = new Date(2022, 3, 14, 17, 0, 0);
    // console.log(futureDate);

    const year = futureDate.getFullYear();
    const hours = futureDate.getHours();
    const minutes = futureDate.getMinutes();

    let month = futureDate.getMonth();
    month = months[month];
    // console.log(month);

    const date = futureDate.getDate();
    let weekday = futureDate.getDay();
    weekday = weekdays[weekday];
    console.log(weekday);    

    giveaway.innerHTML = `give away ends on ${weekday} ${date} ${month} ${year} ${hours} : ${minutes}`;

    //future time in milliseconds
    const futureTime = futureDate.getTime();
    // console.log(futureTime);

    function getRemainingTime() {
        const today = new Date().getTime();
        // console.log(today);
        const t = futureTime - today;
        console.log(t);

        //1s = 1000ms
        //1m = 60s
        //1hour = 60min
        //1day = 24hours

        //values in milliseconds
        const oneDay = 24 * 60 * 60 * 1000;
        const oneHour = 60 * 60 * 1000;
        const oneMinute = 60 * 1000;

        //caluculate all values
        let days = t / oneDay;
        days = Math.floor(days);
        console.log(days);

        let hours = Math.floor((t % oneDay) / oneHour);
        console.log(hours);

        let minutes = Math.floor((t % oneHour) / oneMinute);
        console.log(minutes);

        let seconds = Math.floor((t % oneMinute) / 1000);
        console.log(seconds);

        const values = [days, hours, minutes, seconds];

        function format(item) {
            if(item < 10) {
                return (item = `0${item}`);
            }
            return item;

        } 

        items.forEach((item, index) => {
            item.innerHTML = format(values[index]);
            if(t < 0) {
                clearInterval(countdown);
                deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired...</h4>`
            }

        })
    }

    let countdown = setInterval(getRemainingTime, 1000);

    getRemainingTime();







}