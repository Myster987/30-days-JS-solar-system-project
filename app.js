const calculateMass = (m, g) => `${Math.round(m * g)} N`;

const gConstMap = new Map([
    ["Earth", 9.81],
    ["Jupiter", 23, 1],
    ["Mars", 3.7],
    ["Moon", 1.622],
    ["Neptune", 11],
    ["Saturn", 9],
    ["Uranus", 8.7],
    ["Venus", 8.9],
    ["Sun", 273.95],
]);

const selectPlanet = document.getElementById("selectPlanet");
const planetImg = document.querySelector(".planet-img-container > img");
const resultContainer = document.querySelector(".result-container");

selectPlanet.addEventListener("change", (e) => {
    value = e.target.value;

    if (value == "") return;

    pathToImg = `images/${value}.png`;

    planetImg.src = pathToImg;
    planetImg.alt = `Image of ${value}`;
    resultContainer.style.display = "flex";
    resultContainer.style.justifyContent = "center";
    resultContainer.style.alignItems = "center";
    resultContainer.style.flexWrap = "wrap";
    resultContainer.gap = "0.5rem";
});

const massInput = document.getElementById("massInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultWeigth = document.querySelector(".result-weigth");

calculateBtn.onclick = () => {
    const mass = Number(massInput.value != "" ? massInput.value : "not a number");
    if (isNaN(mass)) {
        alert("Enter only numbers!");
        return;
    }

    if (selectPlanet.value == "select object") {
        alert("Select an object!");
        return;
    }

    pathToImg = `images/${selectPlanet.value}.png`;

    planetImg.src = pathToImg;
    planetImg.alt = `Image of ${selectPlanet.value}`;
    resultContainer.style.display = "flex";
    resultContainer.style.justifyContent = "center";
    resultContainer.style.alignItems = "center";
    resultContainer.style.flexWrap = "wrap";
    resultContainer.style.gap = "0.5rem";

    const result = `<div class="final-result">
                        <p>The weigth of this object on <strong>${
                            selectPlanet.value
                        }</strong></p>
                        <div class="round-result">${calculateMass(
                            mass,
                            gConstMap.get(selectPlanet.value)
                        )}</div>
                    </div>`;

    resultWeigth.innerHTML = result;
};
