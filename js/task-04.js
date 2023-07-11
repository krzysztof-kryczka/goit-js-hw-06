let counterValue = 0;

const obj = {
  decBtn: document.querySelector('button[data-action="decrement"]'),
  incBtn: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector("#value"),
};

obj.decBtn?.addEventListener("click", () => setCounterValue(--counterValue));
obj.incBtn?.addEventListener("click", () => setCounterValue(++counterValue));

function setCounterValue(val) {
  counterValue = val;
  obj.value.textContent = counterValue;
}
