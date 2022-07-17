"use strict";
const modal = document.querySelector(".modal");
const openModal = document.querySelectorAll(".place-buy-btn");
console.log(openModal.length);
console.log(modal);
for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
  });
}
document.querySelector(".ti-close").addEventListener("click", function () {
  modal.classList.add("hidden");
});
