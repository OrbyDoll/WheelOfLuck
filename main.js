const WHEEL = document.querySelector(".wheel");

WHEEL.insertAdjacentHTML(
  "beforeend",
  `<svg viewBox="-400 -100 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
    class="wheel-part"
      d="M284.196 0.353546L1.35356 283.196M284.11 566.377L1.26685 283.535M284.463 1.18115C373.463 92.1811 498.063 332.381 284.463 565.181"
      stroke="black"
    />
    <path viewBox="0 0 800 800"
      class="wheel-part"
      d="M284.196 0.353546L1.35356 283.196M284.11 566.377L1.26685 283.535M284.463 1.18115C373.463 92.1811 498.063 332.381 284.463 565.181"
      stroke="black"
    />
  </svg>`
);
