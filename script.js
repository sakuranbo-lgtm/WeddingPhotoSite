const tabs = document.querySelectorAll(".time-tab");

const images = document.querySelectorAll(".spot-image");


// tabs.forEach(tab => {

//     tab.addEventListener("click", () => {

//         const time = tab.dataset.time;


//         // タブの状態を変更

//         tabs.forEach(tab => {

//             tab.classList.remove("active");

//         });

//         tab.classList.add("active");


//         // 画像だけを変更

//         images.forEach(image => {

//             image.src = image.dataset[time];

//         });

//     });

// });

const cards = document.querySelectorAll(".spot-card");


cards.forEach(card => {

    const image = card.querySelector(".spot-image");

    const tabs = card.querySelectorAll(".card-tab");


    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            const time = tab.dataset.time;


            // 画像を変更

            image.src = image.dataset[time];


            // 選択中のタブを変更

            tabs.forEach(tab => {

                tab.classList.remove("active");

            });

            tab.classList.add("active");

        });

    });

});