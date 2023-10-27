const form = document.querySelector(".login-form");

form.addEventListener("submit", loginForm);
function loginForm(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("Будь ласка, заповніть всі поля!");
    return;
  }

  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  form.reset();
}
