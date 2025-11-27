// classList
// add
// remove
//toggle

const body = document.querySelector("body");
const add = document.querySelector(".add"),
  remove = document.querySelector(".remove"),
  toggle = document.querySelector(".toggle"),
  text = document.querySelector(".text");

console.log(add, remove, toggle, text);






add.addEventListener("click", () => {
  text.classList.add("add");
});





remove.addEventListener("click", () => {
  text.classList.remove("add");
});





toggle.addEventListener("click", () => {
  text.classList.toggle("add");
});
