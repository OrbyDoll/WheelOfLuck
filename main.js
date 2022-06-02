const WHEEL = document.querySelector(".wheel");
let degres = 1;
function generateColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
let rotation = setInterval(() => {
  WHEEL.style.transform = `rotateZ(${degres}deg)`;
  degres++;
  if (degres == 361) {
    clearInterval(rotation);
  }
}, 1);
WHEEL.insertAdjacentHTML(
  "beforeend",
  `<svg viewBox="-400 -400 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill=${generateColor()}
      style = "transform: rotateZ(90deg);"
      class="wheel-part"
      d="M400 0C400 52.5287 389.654 104.543 369.552 153.073C349.45 201.604 319.986 245.699 282.843 282.843C245.699 319.986 201.604 349.45 153.073 369.552C104.543 389.654 52.5287 400 -1.74846e-05 400L0 0H400Z"
      stroke="black"
      stroke-width="2"
    />
    <path viewBox="0 0 800 800"
      fill=${generateColor()}
      style = "transform: rotateZ(180deg);"
      class="wheel-part"
      d="M400 0C400 52.5287 389.654 104.543 369.552 153.073C349.45 201.604 319.986 245.699 282.843 282.843C245.699 319.986 201.604 349.45 153.073 369.552C104.543 389.654 52.5287 400 -1.74846e-05 400L0 0H400Z"
      stroke="black"
      stroke-width="2"
    />
    <path viewBox="0 0 800 800"
      fill=${generateColor()}
      style = "transform: rotateZ(270deg);"
      class="wheel-part"
      d="M400 0C400 52.5287 389.654 104.543 369.552 153.073C349.45 201.604 319.986 245.699 282.843 282.843C245.699 319.986 201.604 349.45 153.073 369.552C104.543 389.654 52.5287 400 -1.74846e-05 400L0 0H400Z"
      stroke="black"
      stroke-width="2"
    />
    <path viewBox="0 0 800 800"
      fill=${generateColor()}
      style = "transform: rotateZ(360deg);"
      class="wheel-part"
      d="M400 0C400 52.5287 389.654 104.543 369.552 153.073C349.45 201.604 319.986 245.699 282.843 282.843C245.699 319.986 201.604 349.45 153.073 369.552C104.543 389.654 52.5287 400 -1.74846e-05 400L0 0H400Z"
      stroke="black"
      stroke-width="2"
    />
  </svg>`
);

