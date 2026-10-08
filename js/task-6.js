const amountInput = document.querySelector("#controls input");
const boxes = document.querySelector("#boxes");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  if (!Number.isInteger(amount) || amount < 1 || amount > 100) return;
  const colors = new Set();
  const elements = [];
  for (let index = 0; index < amount; index += 1) {
    const box = document.createElement("div");
    const size = 30 + index * 10;
    let color = getRandomHexColor();
    while (colors.has(color)) color = getRandomHexColor();
    colors.add(color);
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;
    elements.push(box);
  }
  boxes.replaceChildren(...elements);
}
function destroyBoxes() {
  boxes.replaceChildren();
}
document.querySelector("[data-create]").addEventListener("click", () => {
  const amount = Number(amountInput.value);
  if (!Number.isInteger(amount) || amount < 1 || amount > 100) return;
  createBoxes(amount);
  amountInput.value = "";
});
document
  .querySelector("[data-destroy]")
  .addEventListener("click", destroyBoxes);
