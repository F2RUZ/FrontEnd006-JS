// import Toastify from "./node_modules/toastify-js/src/toastify.js";
const elForm = document.querySelector(".form");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}[\]:;"'<>.,?/~`]).{8,}$/;

//addevent

elForm.addEventListener("submit", (e) => {
  e.preventDefault(); // reaload oldinin oladi

  const username = elForm["username"].value.trim();
  const passwd = elForm["passwd"].value.trim();
  const email = elForm["email"].value.trim();

  if (!emailRegex.test(email) || !passwordRegex.test(passwd)) {
    return Toastify({
      text: "Email or passwd not valid",
      duration: 1000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, red, crimson)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }

  if (username === "") {
    return Toastify({
      text: "username not valid",
      duration: 1000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, red, crimson)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }

  const user = {
    username: username,
    email: email,
    passwd: passwd,
  };

  Toastify({
    text: "Successfull validation",
    duration: 1000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, green, greenyellow)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();

  console.log(user);
});
