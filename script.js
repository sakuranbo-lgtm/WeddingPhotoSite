// スポットを表示する場所
const spotList = document.querySelector("#spot-list");


// spots.jsのデータからカードを作成
spots.forEach(spot => {

    // カードを作成
    const card = document.createElement("div");

    card.className = "spot-card";


    // 最初のモードを取得
    const firstMode = spot.modes[0];


    // カードのHTMLを作成
    card.innerHTML = `

        <img
            class="spot-image"
            src="${firstMode.image}"
        >

        <div class="spot-body">

            <h3>${spot.name}</h3>

            <p>${spot.description}</p>

            <div class="card-tabs">

                ${spot.modes.map((mode, index) => `

                    <button
                        class="card-tab ${index === 0 ? "active" : ""}"
                        data-mode="${mode.id}"
                    >
                        ${mode.label}
                    </button>

                `).join("")}

            </div>

        </div>

    `;


    // カードを画面に追加
    spotList.appendChild(card);


    // カード内の画像を取得
    const image = card.querySelector(".spot-image");


    // カード内のボタンを取得
    const tabs = card.querySelectorAll(".card-tab");


    // ボタンにクリックイベントを設定
    tabs.forEach(tab => {

        tab.addEventListener("click", function () {

            // クリックされたモードIDを取得
            const modeId = this.dataset.mode;


            // 対応するモードを探す
            const selectedMode = spot.modes.find(
                mode => mode.id === modeId
            );


            // 画像を変更
            image.src = selectedMode.image;


            // すべてのボタンからactiveを削除
            tabs.forEach(tab => {

                tab.classList.remove("active");

            });


            // クリックしたボタンをactiveにする
            this.classList.add("active");

        });

    });

});