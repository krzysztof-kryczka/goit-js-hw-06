const textInput = document.querySelector("#validation-input");

const objValidate = {
  VALID: "valid",
  INVALID: "invalid",
};

const handler = (e) => {
  if (e.currentTarget.value.length !== Number(textInput.dataset.length)) {
    textInput.classList.add(objValidate.INVALID);
    if (textInput.classList.contains(objValidate.VALID)) {
      textInput.classList.remove(objValidate.VALID);
    }
  } else {
    textInput.classList.add(objValidate.VALID);
    if (textInput.classList.contains(objValidate.INVALID)) {
      textInput.classList.remove(objValidate.INVALID);
    }
  }
};

textInput.addEventListener("blur", handler);
