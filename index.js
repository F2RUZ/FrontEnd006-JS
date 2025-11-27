const elForm = document.querySelector(".form");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}[\]:;"'<>.,?/~`]).{8,}$/;

// === Toast notification function ===
const showToast = (text, color = "red") => {
  Toastify({
    text,
    duration: 1500,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background:
        color === "red"
          ? "linear-gradient(to right, red, crimson)"
          : "linear-gradient(to right, green, limegreen)",
    },
  }).showToast();
};

elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = elForm["username"].value.trim();
  const passwd = elForm["passwd"].value.trim();
  const email = elForm["email"].value.trim();

  // === Validations ===
  if (username.length < 3) {
    return showToast("Username must be at least 3 chars");
  }

  if (!emailRegex.test(email)) {
    return showToast("Invalid email format");
  }

  if (!passwordRegex.test(passwd)) {
    return showToast(
      "Password must contain letters, numbers, symbols and be 8+ chars"
    );
  }

  // === If all valid ===
  const user = {
    username,
    email,
    passwd,
  };

  showToast("Successful validation", "green");
  console.log(user);
});
