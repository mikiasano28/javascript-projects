'use strict';

{
    const text = [
          `Gorillas are large apes that are native to Africa. 
        They are typically divided into two groups. The mountain 
        gorilla lives in the mountainous regions of central Africa, 
        while the lowland gorilla lives in the flat, dense forests of 
        central and western Africa. Though the two types are very similar, 
        they have a few differences. For example, mountain gorillas tend 
        to have longer hair, whereas lowland gorillas have short, soft hair, 
        according to the `,
          `Another difference is size. Lowland gorillas are 4 to 6 feet 
        (1.2 to 1.8 meters) tall and weigh 150 to 400 lbs. (68 to 181 kilograms). 
        Mountain gorillas are about the same height, though they tend to weigh a 
        bit more. They are 4 to 6 feet tall and weigh 300 to 485 lbs. (135 to 220 kg). 
        According to the`,
          `Mountain gorillas live in Rwanda, Uganda and the Democratic Republic 
        of the Congo, on green, volcanic mountains. Lowland gorillas live in 
        the forests of central and western Africa in Equatorial Guinea, Angola, 
        Cameroon, the Central African Republic, Congo, Gabon and the Democratic 
        Republic of the Congo. A group of gorillas can have a territory of up to 
        16 square miles (41 square kilometers), according to`,
          `Gorillas are large apes that are native to Africa. 
        They are typically divided into two groups. The mountain 
        gorilla lives in the mountainous regions of central Africa, 
        while the lowland gorilla lives in the flat, dense forests of 
        central and western Africa. Though the two types are very similar, 
        they have a few differences. For example, mountain gorillas tend 
        to have longer hair, whereas lowland gorillas have short, soft hair, 
        according to the `,
          `Another difference is size. Lowland gorillas are 4 to 6 feet 
        (1.2 to 1.8 meters) tall and weigh 150 to 400 lbs. (68 to 181 kilograms). 
        Mountain gorillas are about the same height, though they tend to weigh a 
        bit more. They are 4 to 6 feet tall and weigh 300 to 485 lbs. (135 to 220 kg). 
        According to the`,
          `Another difference is size. Lowland gorillas are 4 to 6 feet 
        (1.2 to 1.8 meters) tall and weigh 150 to 400 lbs. (68 to 181 kilograms). 
        Mountain gorillas are about the same height, though they tend to weigh a 
        bit more. They are 4 to 6 feet tall and weigh 300 to 485 lbs. (135 to 220 kg). 
        According to the`,
          `Mountain gorillas live in Rwanda, Uganda and the Democratic Republic 
        of the Congo, on green, volcanic mountains. Lowland gorillas live in 
        the forests of central and western Africa in Equatorial Guinea, Angola, 
        Cameroon, the Central African Republic, Congo, Gabon and the Democratic 
        Republic of the Congo. A group of gorillas can have a territory of up to 
        16 square miles (41 square kilometers), according to`,
          `Mountain gorillas live in Rwanda, Uganda and the Democratic Republic 
        of the Congo, on green, volcanic mountains. Lowland gorillas live in 
        the forests of central and western Africa in Equatorial Guinea, Angola, 
        Cameroon, the Central African Republic, Congo, Gabon and the Democratic 
        Republic of the Congo. A group of gorillas can have a territory of up to 
        16 square miles (41 square kilometers), according to`,
          `Mountain gorillas live in Rwanda, Uganda and the Democratic Republic 
        of the Congo, on green, volcanic mountains. Lowland gorillas live in 
        the forests of central and western Africa in Equatorial Guinea, Angola, 
        Cameroon, the Central African Republic, Congo, Gabon and the Democratic 
        Republic of the Congo. A group of gorillas can have a territory of up to 
        16 square miles (41 square kilometers), according to`,
    ];

    const form = document.querySelector(".loren-form");
    const amount = document.getElementById("amount");
    const result = document.querySelector(".loren-text");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // console.log(e.currentTarget);
        const value = parseInt(amount.value);
        // console.log(isNaN(value));
        const random = Math.floor(Math.random() * text.length);

        // empty
        // -1
        // > 9
        if(isNaN(value) || value <= 0 || value > 9) {
            result.innerHTML = `<p class="result">${text[random]}</p>`;
        }else {
            let tempText = text.slice(0, value);
            // console.log(tempText);
            tempText = tempText.map((item) => {
                return `<p class="result">${item}</p>`;
            }).join("");    // "" はデフォルで, が表示されるのを防いでいる
            // console.log(tempText);

            result.innerHTML = tempText;
        }
    })

}