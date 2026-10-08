const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = loginForm.elements;
  const values = { email: email.value.trim(), password: password.value.trim() };
  if (!values.email || !values.password) {
    alert("All form fields must be filled in");
    return;
  }
  console.log(values);
  loginForm.reset();
});
