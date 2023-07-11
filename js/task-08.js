const frmLogin = document.querySelector(".login-form");

const submitForm = (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled");
  }

  const frmUser = {
    email: email.value,
    password: password.value,
  };

  console.log(frmUser);
  frmLogin.reset();
};

frmLogin.addEventListener("submit", submitForm);
