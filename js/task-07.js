const obj = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

obj.input.value = 20;
obj.text.style.fontSize = obj.input.value + "px";

obj.input.addEventListener("input", () => (obj.text.style.fontSize = `${obj.input.value}px`));
