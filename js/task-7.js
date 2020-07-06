const input = document.querySelector("#font-size-slider");
const span = document.querySelector("#text");
input.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  span.style.fontSize = event.currentTarget.value + "px";
};