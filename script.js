// ========================================
// アルバムデザイン表示
// ========================================

const albumList = document.querySelector("#album-list");


// albums.jsのデータからカードを作成
albums.forEach(album => {

    const card = document.createElement("div");

    card.className = "album-card";


    // アルバムカードのHTML
    card.innerHTML = `

        <img
            class="album-cover"
            src="${album.cover}"
            alt="${album.name}"
        >

        <div class="album-body">

            <h3>${album.name}</h3>

            <p>${album.description}</p>

        </div>

    `;


    // カードを画面に追加
    albumList.appendChild(card);


    // カードをクリックしたとき
    card.addEventListener("click", function () {

    // モーダルにタイトルを表示
    document.querySelector("#album-modal-title").textContent =
        album.name;


    // 説明文を表示
    document.querySelector("#album-modal-description").textContent =
        album.description;


    // 中面を表示する場所
    const pages =
        document.querySelector("#album-pages");


    // 一度空にする
    pages.innerHTML = "";


    // 表紙を表示
    const cover = document.createElement("img");

    cover.src = album.cover;

    cover.alt = album.name;

    pages.appendChild(cover);


    // 中面を表示
    album.pages.forEach(page => {

        const image = document.createElement("img");

        image.src = page;

        image.alt = album.name;

        pages.appendChild(image);

    });


    // モーダルを表示
    document
        .querySelector("#album-modal")
        .classList.add("active");

    });

});



// ========================================
// スポット表示
// ========================================

const spotList = document.querySelector("#spot-list");


// spots.jsのデータからカードを作成
spots.forEach(spot => {

    // カードを作成
    const card = document.createElement("div");

    card.className = "spot-card";


    // 最初のモードを取得
    const firstMode = spot.modes[0];


    // カードのHTML
    card.innerHTML = `

        <img
            class="spot-image"
            src="${firstMode.image}"
            alt="${spot.name}"
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


    // 画像を取得
    const image = card.querySelector(".spot-image");


    // ボタンを取得
    const tabs = card.querySelectorAll(".card-tab");


    // 昼・夜などのボタン
    tabs.forEach(tab => {

        tab.addEventListener("click", function () {

            // クリックされたモード
            const modeId = this.dataset.mode;


            // 対応する画像を探す
            const selectedMode = spot.modes.find(
                mode => mode.id === modeId
            );


            // 画像を変更
            image.src = selectedMode.image;


            // activeをすべて削除
            tabs.forEach(tab => {

                tab.classList.remove("active");

            });


            // クリックしたボタンをactive
            this.classList.add("active");

        });

    });

});



// ========================================
// 画像拡大表示
// ========================================

const modal = document.querySelector("#image-modal");

const modalImage = document.querySelector("#modal-image");

const closeButton = document.querySelector("#modal-close");


// モーダルを開く関数
function openModal(imageSrc) {

    modalImage.src = imageSrc;

    modal.classList.add("active");

}


// 完成イメージ・スポット画像をクリック
document.addEventListener("click", function (event) {

    if (

        event.target.matches(".gallery img") ||

        event.target.matches(".spot-image")

    ) {

        openModal(event.target.src);

    }

});


// ×ボタンで閉じる
closeButton.addEventListener("click", function () {

    modal.classList.remove("active");

});


// 背景をクリックして閉じる
modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


// ESCキーで閉じる
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        modal.classList.remove("active");

    }

});

// ========================================
// アルバム詳細モーダル
// ========================================

const albumModal =
    document.querySelector("#album-modal");

const albumCloseButton =
    document.querySelector("#album-modal-close");


// ×ボタンで閉じる
albumCloseButton.addEventListener("click", function () {

    albumModal.classList.remove("active");

});


// 背景をクリックして閉じる
albumModal.addEventListener("click", function (event) {

    if (event.target === albumModal) {

        albumModal.classList.remove("active");

    }

});


// ESCキーで閉じる
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        albumModal.classList.remove("active");

    }

});