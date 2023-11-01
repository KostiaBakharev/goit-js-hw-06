function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document
  .querySelector("[data-create]")
  .addEventListener("click", createBoxes);
const destroyBtn = document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = document.querySelector("input").value;

  const arrBox = [];
  const boxContainer = document.getElementById("boxes");

  for (let i = 0; i < amount; i += 1) {
    let sizeBox = 30 + i * 10;

    const box = document.createElement("div");
    box.style.width = `${sizeBox}px`;
    box.style.height = `${sizeBox}px`;
    box.style.backgroundColor = getRandomHexColor();
    arrBox.push(box);
  }

  boxContainer.append(...arrBox);
}
// const amount = document.querySelector("input").value;
// const boxContainer = document.getElementById("boxes");
// for (let i = 0; i < amount; i += 1) {
//   const box = document.createElement("div");
//   const sizeBox = 30 + i * 10;
//   box.style.width = `${sizeBox}px`;
//   box.style.height = `${sizeBox}px`;
//   box.style.backgroundColor = getRandomHexColor();
//   boxContainer.insertAdjacentElement("beforeend", box);
// }

function destroyBoxes() {
  const boxContainer = document.getElementById("boxes");
  boxContainer.innerHTML = "";
}
// commit
