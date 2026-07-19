// ========================================
// フォトスポットカード：昼・夜切り替え
// ========================================

// すべてのスポットカードを取得
const cards = document.querySelectorAll(".spot-card");


// 各スポットカードごとに処理
cards.forEach(card => {

    // カード内の画像を取得
    const image = card.querySelector(".spot-image");

    // カード内の昼・夜タブを取得
    const tabs = card.querySelectorAll(".card-tab");


    // 昼・夜タブそれぞれにクリックイベントを設定
    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            // クリックされたタブの時間帯を取得
            const time = tab.dataset.time;


            // 画像を昼・夜の画像に切り替える
            image.src = image.dataset[time];


            // すべてのタブから active を外す
            tabs.forEach(tab => {

                tab.classList.remove("active");

            });


            // クリックされたタブだけ active にする
            tab.classList.add("active");

        });

    });

});