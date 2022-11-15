const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
let width = 0;

next.addEventListener("click", () => {
  currentActive > circles.length - 1 ? currentActive : currentActive++;
  update("next");
});

prev.addEventListener("click", () => {
  currentActive < 1 ? (currentActive = 1) : currentActive--;
  update("prev");
});

function update(btn) {
  const actives = document.querySelectorAll(".active");
  circles.forEach((circle, index) => {
    index < currentActive ? circle.classList.add("active") : circle.classList.remove("active");
  });
  //   btn === "prev" && width >= 0 ? (width -= 33) : width;
  //   btn === "next" && width < 90 ? (width += 33) : width;
  btn === "prev" ? (width -= 33) : (width += 33);

  progress.style.width = width + "%";
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
