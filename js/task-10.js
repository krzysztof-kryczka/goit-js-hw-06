function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const obj = {
  boxes: document.querySelector("div#boxes"),
  input: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxSize: 30,
};

const generateDiv = (index) =>
  `<div style="background-color: ${getRandomHexColor()}; 
  width: ${obj.boxSize + 10 * index}px; height: ${
    obj.boxSize + 10 * index
  }px; "></div>`;

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const newDiv = generateDiv(i);
    obj.boxes.insertAdjacentHTML("beforeend", newDiv);
  }
};

const destroyBoxes = () => {
  // https://stackoverflow.com/posts/40606838/revisions
  while (boxes.firstChild) {
    obj.boxes.firstChild.remove();
  }
};

obj.createBtn.addEventListener("click", () => {
  destroyBoxes();
  createBoxes(Number(obj.input.value));
});

obj.destroyBtn.addEventListener("click", () => destroyBoxes());
