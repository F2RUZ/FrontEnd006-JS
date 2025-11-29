//click

//dblclick

//submit

// document.querySelector(".btn").addEventListener("", () => {
//   alert("click types worked");
// });

// window.addEventListener("scroll", (e) => {
//   console.log(e);
// });

// const input = document.querySelector(".name");

// //form ,, input

// input.addEventListener("focus", (e) => {
//   console.log(e.target.value);
// });

window.addEventListener("keydown", (e) => {
  console.log(e);
});

let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log(i);
// Expected output: 3

let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// Expected output: "012456789"
