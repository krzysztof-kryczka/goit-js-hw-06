function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const obj = {
  btn: document.querySelector("button.change-color"),
  colorSpan: document.querySelector("span.color"),
  body: document.body,
};

const changeBackground = () => {
  const randomColor = getRandomHexColor();
  obj.body.style.backgroundColor = randomColor;
  obj.colorSpan.textContent = randomColor;
}

obj.btn.addEventListener("click", changeBackground);
