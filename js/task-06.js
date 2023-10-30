const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const expectedLength = Number(input.dataset.length);
  input.classList.remove("invalid", "valid");

  if (input.value.length === expectedLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});
