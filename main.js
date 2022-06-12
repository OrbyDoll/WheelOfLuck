const WHEEL = document.querySelector(".wheelDiv");
const WHEELSVG = document.querySelector(".wheel");
const STARTBTN = document.querySelector(".startBtn");
const ADDOPTION = document.querySelector(".addOption");
const DELOPTION = document.querySelector(".delOption");
const MENU = document.querySelector(".menu-context");
function generateColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function createWheel() {
    const PARTSNUMBER = document.querySelectorAll(".menu-context-option");
    for (var i = 0; i < PARTSNUMBER.length; i++) {
        let color = generateColor();
        PARTSNUMBER[i].style.backgroundColor = color;
        PARTSNUMBER[i].value = i + 1;
        switch (PARTSNUMBER.length) {
            case 1:
                console.log(PARTSNUMBER.length);
                WHEELSVG.setAttribute("viewBox", "0 0 800 800");
                WHEELSVG.innerHTML = `<circle cx="400" cy="400" r="399.5" fill=${color} stroke="black"/>`;
                break;
            case 2:
                console.log(PARTSNUMBER.length);
                WHEELSVG.style.transform = "rotate(90deg)";
                WHEELSVG.setAttribute("viewBox", "0 -400 800 800");
                WHEELSVG.insertAdjacentHTML(
                    "beforeend",
                    `<path
            d="M800 0C800 52.5287 789.654 104.543 769.552 153.073C749.45 201.604 719.986 245.699 682.843 282.843C645.699 319.986 601.604 349.45 553.073 369.552C504.543 389.654 452.529 400 400 400C347.471 400 295.457 389.654 246.927 369.552C198.396 349.45 154.301 319.986 117.157 282.843C80.0138 245.699 50.5501 201.604 30.4482 153.073C10.3463 104.543 -4.59221e-06 52.5287 0 -3.49691e-05L400 0H800Z"
            fill=${color}
            stroke="black"
            stroke-width="2"
            style="transform: rotateZ(${
                i * (360 / PARTSNUMBER.length)
            }deg);  transform-origin: 50% 0;"
          />`
                );
                break;
            case 3:
                WHEELSVG.style.transform = "rotate(-30deg)";
                WHEELSVG.setAttribute("viewBox", "-200 -400 800 800");
                WHEELSVG.insertAdjacentHTML(
                    "beforeend",
                    `<path
          fill=${color}
          d="M600 0C600 70.2076 581.521 139.178 546.421 199.982C511.32 260.785 460.834 311.279 400.036 346.389C339.238 381.499 270.27 399.989 200.063 400C129.855 400.011 60.8815 381.543 0.0725708 346.452L200 0H600Z"
          fill="red"
          stroke="black"
          stroke-width="2"
          style = "transform: rotateZ(${
              (i + 1) * (360 / PARTSNUMBER.length)
          }deg); transform-origin: 25% 0;"
          />`
                );
                break;
            case 4:
                WHEELSVG.setAttribute("viewBox", "-400 -400 800 800");
                WHEELSVG.style.transform = "rotate(0deg)";
                WHEELSVG.insertAdjacentHTML(
                    "beforeend",
                    `<path
          fill=${color}
          style = "transform: rotateZ(${
              (i + 1) * (360 / PARTSNUMBER.length)
          }deg); transform-origin: 0 0;"
          d="M400 0C400 52.5287 389.654 104.543 369.552 153.073C349.45 201.604 319.986 245.699 282.843 282.843C245.699 319.986 201.604 349.45 153.073 369.552C104.543 389.654 52.5287 400 -1.74846e-05 400L0 0H400Z"
          stroke="black"
          stroke-width="2"
          />`
                );
                break;
            case 5:
                WHEELSVG.style.transform = "rotate(18deg)";
                WHEELSVG.insertAdjacentHTML(
                    "beforeend",
                    `<path
            d="M400 0C400 84.4717 373.258 166.775 323.607 235.114C273.956 303.453 203.944 354.319 123.607 380.423L0 0L400 0Z"
            fill=${color}
            stroke="black"
            stroke-width="2"
            style="transform:rotate(${
                (i + 1) * (360 / PARTSNUMBER.length)
            }deg);transform-origin:0 0;"
          />`
                );
                break;
            case 6:
                window.close()
                break;
            case 7:
                break;
            case 8:
                break;
            case 9:
                break;
            case 10:
                break;
        }
    }
}
function wheelOptions() {
    ADDOPTION.addEventListener("click", () => {
        WHEELSVG.innerHTML = "";
        MENU.insertAdjacentHTML(
            "afterbegin",
            `<input type="text" class="menu-context-option"></input>`
        );
        createWheel(); // Что-то надо делать с этой ******
    });
    DELOPTION.addEventListener("click", () => {
        const PARTSNUMBER1 = document.querySelectorAll(".menu-context-option");
        PARTSNUMBER1[0].remove();
        WHEELSVG.innerHTML = "";
        createWheel();
    });
    STARTBTN.addEventListener("click", () => {
        const PARTSNUMBER1 = document.querySelectorAll(".menu-context-option");
        let degres = 0;
        WHEEL.style.transform = `rotate(0deg) scale(1,-1)`;
        let degresBlock = getRandomInt(300, 3000);
        let rotation = setInterval(() => {
            WHEEL.style.transform = `rotate(${degres}deg) scale(1,-1)`;
            degres++;
            if (degres == degresBlock) {
                clearInterval(rotation);
                let sectionNumber =
                    (degres / (360 / PARTSNUMBER1.length)) %
                    PARTSNUMBER1.length;
                for (let i = 0; i < PARTSNUMBER1.length + 1; i++) {
                    if (sectionNumber > i - 1 && sectionNumber < i) {
                        document.querySelector("body").insertAdjacentHTML(
                            "beforeend",
                            `<div class="upperBody">
                                <div class="upperCard">
                                    <p class="winnerText">${PARTSNUMBER1[i - 1].value} Wins</p>
                                    <button>Ok</button>
                                </div>
                            </div>`
                        );
                    }
                }
            }
        }, 1);
    });
}
createWheel();
wheelOptions();
// WHEELSVG.insertAdjacentHTML(
//   "beforeend",
//   `<path
//       d="M400 0C400 84.4717 373.258 166.775 323.607 235.114C273.956 303.453 203.944 354.319 123.607 380.423L0 0L400 0Z"
//       fill=none
//       stroke="black"
//       stroke-width="2"
//       style="transform:rotate(0deg);transform-origin:0 0;"
//     />
//     <path
//       d="M400 0C400 84.4717 373.258 166.775 323.607 235.114C273.956 303.453 203.944 354.319 123.607 380.423L0 0L400 0Z"
//       fill=none
//       stroke="black"
//       stroke-width="2"
//       style="transform:rotate(72deg);transform-origin:0 0;"
//     />
//     <path
//       d="M400 0C400 84.4717 373.258 166.775 323.607 235.114C273.956 303.453 203.944 354.319 123.607 380.423L0 0L400 0Z"
//       fill=none
//       stroke="black"
//       stroke-width="2"
//       style="transform:rotate(144deg);transform-origin:0 0;"
//     />
//     <path
//       d="M400 0C400 84.4717 373.258 166.775 323.607 235.114C273.956 303.453 203.944 354.319 123.607 380.423L0 0L400 0Z"
//       fill=none
//       stroke="black"
//       stroke-width="2"
//       style="transform:rotate(216deg);transform-origin:0 0;"
//     />
//     <path
//       d="M400 0C400 84.4717 373.258 166.775 323.607 235.114C273.956 303.453 203.944 354.319 123.607 380.423L0 0L400 0Z"
//       fill=none
//       stroke="black"
//       stroke-width="2"
//       style="transform:rotate(288deg);transform-origin:0 0;"
//     />`
// );
