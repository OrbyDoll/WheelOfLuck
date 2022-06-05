const WHEEL = document.querySelector(".wheelDiv");
const PARTSNUMBER = document.querySelectorAll(".menu-context-option");
const WHEELSVG = document.querySelector(".wheel");
const STARTBTN = document.querySelector(".startBtn");
const ADDOPTION = document.querySelector(".addOption");
function generateColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function createWheel() {
  let degres = 1;
    for (let i = 0; i < PARTSNUMBER.length; i++) {
        let color = generateColor();
        PARTSNUMBER[i].style.backgroundColor = color;
        WHEELSVG.insertAdjacentHTML("beforeend",`<path
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
      console.log(1);
        let rotation = setInterval(() => {
            WHEEL.style.transform = `rotateZ(${degres}deg)`;
            degres++;
            if (degres == getRandomInt(300,3000)) {
                clearInterval(rotation);
            }
        }, 1);
    });
}
createWheel();
