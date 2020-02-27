console.log("button creation");
document.querySelector("body").insertAdjacentHTML("beforeend",
  `
    <input style="position: fixed; bottom: 64px; right: 16px; z-index: 999" type="range" min="0" max="100" value="50" class="slider" id="angle">
    <a id="reload" href="#" style="position: fixed; top: 16px; right: 16px; z-index: 999; font-size: 64px; text-decoration: none;">🔄</a>
  `
);

// Event listener on the canvas
const angle = document.querySelector("#angle");
const launchBall = (event) => {
  document.querySelector("#ball").setAttribute("velocity", `${angle.value/100 -0.5} 0 -2`);
}
angle.addEventListener("touchstart", launchBall);
angle.addEventListener("click", launchBall);
// Event listener for the page refresh button
document.querySelector("#reload").addEventListener("click", (event) => {
  console.log("reload");
  location.reload();
});
