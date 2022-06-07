const WHEEL = document.querySelector(".wheelDiv");
const PARTSNUMBER = document.querySelectorAll(".menu-context-option");
const WHEELSVG = document.querySelector(".wheel");
const STARTBTN = document.querySelector(".startBtn");
const ADDOPTION = document.querySelector(".addOption");
function generateColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function createWheel() {
    var degres = 0;
    for (let i = 0; i < PARTSNUMBER.length; i++) {
        let color = generateColor();
        PARTSNUMBER[i].style.backgroundColor = color;
        WHEELSVG.insertAdjacentHTML(
            "beforeend",
            `<path
      fill=${color}
      style = "transform: rotateZ(${(i + 1) * 90}deg);"
      class="wheel-part"
      d="M400 0C400 52.5287 389.654 104.543 369.552 153.073C349.45 201.604 319.986 245.699 282.843 282.843C245.699 319.986 201.604 349.45 153.073 369.552C104.543 389.654 52.5287 400 -1.74846e-05 400L0 0H400Z"
      stroke="black"
      stroke-width="2"
      />`
        );
    }
    STARTBTN.addEventListener("click", () => {
        WHEEL.style.transform = `rotateZ(0deg)`;
        degres = 0;
        setTimeout(() => {
            var rotDeg = getRandomInt(300, 3000);
            let rotation = setInterval(() => {
                WHEEL.style.transform = `rotateZ(${degres}deg)`;
                degres++;
                if (degres == rotDeg) {
                    clearInterval(rotation);
                    let partsNumber = PARTSNUMBER.length;
                    let turnoversNumber = degres / (360 / partsNumber);
                    let sectionNumber = turnoversNumber % partsNumber;
                    console.log(sectionNumber);
                    for (let i = 0; i < partsNumber+1; i++) {
                        if (sectionNumber > i - 1&& sectionNumber < i) {
                            console.log(i);
                        }
                    }
                }
            }, 1);
        }, 200);
    });
}
createWheel();
