const spotList = document.querySelector("#spot-list");

spots.forEach(spot => {

    const card = document.createElement("div");

    card.className = "spot-card";

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

    spotList.appendChild(card);

    const image = card.querySelector(".spot-image");

    const tabs = card.querySelectorAll(".card-tab");

    tabs.forEach(tab => {

        tab.addEventListener("click", function () {

            const time = this.dataset.time;

            image.src = spot.images[time];

            tabs.forEach(tab => {

                tab.classList.remove("active");

            });

            this.classList.add("active");

        });

    });

});