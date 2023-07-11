const DEFAULT_VALUE = "Anonymous";

const obj = {
  input: document.querySelector("input#name-input"),
  output: document.querySelector("span#name-output"),
};

obj.input.addEventListener(
  "input",
  (e) =>
    (obj.output.textContent =
      e.target.value === "" ? DEFAULT_VALUE : e.target.value)
);
