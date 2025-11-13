// let number = 0;

// while (number <= 10) {
//   number++;
//   console.log(number);
// }

// var start = 0;

// do {
//   if (start % 2 !== 0) {
//     console.log(start);
//   }
//   start++;
// } while (start < 100);

// var number = 0;
// for (var i = 0; i < 3; i++) {

//   console.log(number++);

// }
// // 1 2

// let num = 0;

// for (let i = 0; i < 3; i++) {
//   console.log(num++);
// }

// const numberrr = 0;

// for (const i = 0; i < 3; i++) {
//   console.log(numberrr++);
// }

// const eltext = document.querySelector(".text");
// eltext.innerHTML = "<b>Salom</b>";

// console.log(eltext);

const elH1 = document.createElement("h1");
const elP = document.createElement("p");
elH1.textContent = "men java scriptdan elon qilindim";
const elBody = document.querySelector("body");

elH1.setAttribute("class", "text");
elH1.setAttribute("id", "title");

elP.textContent = "men paragraphman";

elBody.innerHTML = `


   <div>
      <img
        src="https://thumbs.dreamstime.com/b/hiker-walking-along-scenic-mountain-ridge-path-sunrise-lone-wearing-yellow-jacket-follows-narrow-trail-stunning-381071486.jpg"
        alt="bu yerda rasm bor"
      />

      <input type="text" placeholder="write some text" />
      <button class="btn">Meni boss</button>

      <button class="click">Click</button>
    </div>

`;
