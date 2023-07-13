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

const generateDiv = () => {
  const genDiv = `<div style="background-color: ${getRandomHexColor()}; 
  width: ${obj.boxSize}px; height: ${obj.boxSize}px; "></div>`;
  obj.boxSize += 10;
  return genDiv;
};

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const newDiv = generateDiv();
    obj.boxes.insertAdjacentHTML("beforeend", newDiv);
  }
};

const destroyBoxes = (amount) => {
  // https://stackoverflow.com/posts/40606838/revisions
  // while (boxes.firstChild) {
  //   obj.boxes.firstChild.remove();
  // }

  // feature remove selected number of items
  for (let i = 0; i < amount; i++) {
    if (typeof boxes.lastChild != "undefined" && boxes.lastChild != null) {
      obj.boxes.lastChild.remove();
      obj.boxSize -= 10;
    }
  }
};

obj.createBtn.addEventListener("click", () => {
  createBoxes(Number(obj.input.value));
});

obj.destroyBtn.addEventListener("click", () =>
  destroyBoxes(Number(obj.input.value))
);
