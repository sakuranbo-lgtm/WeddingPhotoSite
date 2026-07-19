// すべてのスポットカードを取得
const cards = document.querySelectorAll(".spot-card");


// 各スポットカードを処理
cards.forEach(card => {

    // カード内の画像を取得
    const image = card.querySelector(".spot-image");

    // カード内の昼夜タブを取得
    const tabs = card.querySelectorAll(".card-tab");


    // 昼・夜のタブにクリックイベントを設定
    tabs.forEach(tab => {

        tab.addEventListener("click", function () {

            // day または night を取得
            const time = this.dataset.time;

            console.log("クリック:", time);


            // 画像を切り替え
            image.src = image.dataset[time];


            // すべてのタブから active を削除
            tabs.forEach(tab => {

                tab.classList.remove("active");

            });


            // クリックしたタブを active にする
            this.classList.add("active");

        });

    });

});