// スポットを表示する場所
const spotList = document.querySelector("#spot-list");


// spots.jsのデータからカードを作成
spots.forEach(spot => {

    // カードを作成
    const card = document.createElement("div");

    card.className = "spot-card";


    // カードのHTMLを作成
    card.innerHTML = `

        <img
            class="spot-image"
            src="${spot.images.day}"
        >

        <div class="spot-body">

            <h3>${spot.name}</h3>

            <p>${spot.description}</p>

            <div class="card-tabs">

                <button
                    class="card-tab active"
                    data-time="day"
                >
                    ☀ 昼
                </button>

                <button
                    class="card-tab"
                    data-time="night"
                >
                    🌙 夜
                </button>

            </div>

        </div>

    `;


    // カードを画面に追加
    spotList.appendChild(card);


    // 作成した画像を取得
    const image = card.querySelector(".spot-image");


    // 作成したタブを取得
    const tabs = card.querySelectorAll(".card-tab");


    // 昼・夜のタブにクリックイベントを設定
    tabs.forEach(tab => {

        tab.addEventListener("click", function () {

            // day または night を取得
            const time = this.dataset.time;


            // 画像を変更
            image.src = spot.images[time];


            // すべてのタブからactiveを削除
            tabs.forEach(tab => {

                tab.classList.remove("active");

            });


            // クリックしたタブをactiveにする
            this.classList.add("active");

        });

    });

});