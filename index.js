const elForm = document.querySelector(".form");
// const elInput = document.querySelector(".todo-input");
const elMessage = document.querySelector(".message");
const elClear = document.querySelector(".clearall");
const elList = document.querySelector(".list");

//AddEvent

elForm.addEventListener("submit", (e) => {
  e.preventDefault(); // reload bolishini oldininoladi

  let inputValue = elForm["input"].value.trim();

  if (!inputValue) return (elMessage.textContent = "Maydonni toldir");

  elMessage.textContent = "";
  elList.innerHTML += `
    <div class="item">
          <p class="todo-text">${
            inputValue.length > 12
              ? inputValue.slice(0, 12).concat("...")
              : inputValue
          }</p>

          <div>
            <div class="fix">
              <div>
                <i class="ri-calendar-line"></i>
                <span>20.11.2025</span>
              </div>
              <i class="ri-check-line"></i>
              <i class="ri-pencil-line"></i>
              <i class="ri-delete-bin-line"></i>
            </div>
          </div>
        </div>
  
  `;

  elForm.reset();
});

//Clear btn

elClear.addEventListener("click", () => {
  elList.innerHTML = "";
});
