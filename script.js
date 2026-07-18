const tabs = document.querySelectorAll(".time-tab");

const images = document.querySelectorAll(".spot-image");


tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const time = tab.dataset.time;


        // タブの状態を変更

        tabs.forEach(tab => {

            tab.classList.remove("active");

        });

        tab.classList.add("active");


        // 画像だけを変更

        images.forEach(image => {

            image.src = image.dataset[time];

        });

    });

});