"use strict";

// Selecting elements
const isValidEmail = function (email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Email
const email = document.getElementById("emailVerification");
const btnSubmit = document.querySelector(".btnSubmit");
const emailEl = document.querySelector(".emailVerifi");
const infoEl = document.querySelector(".infomation");

// View more
const btnsViewMore = document.querySelectorAll(".view-more");
const btnsViewLess = document.querySelectorAll(".view-less");

const openViewMoreLess = function () {
  const targetId = this.dataset.target;
  const targetEl = document.querySelector(targetId);

  if (targetEl) {
    const isViewMore = this.classList.contains("view-more");

    const parentContainer =
      this.closest(".col-top") || this.closest(".col-bott");
    const head = parentContainer.querySelector(".col-head");

    // View More click
    if (isViewMore) {
      this.classList.add("d-none");
      targetEl.classList.remove("d-none");

      if (head) {
        head.classList.add("col-head-done");
      }

      // View less click
    } else {
      targetEl.classList.add("d-none");

      //Find view more
      const btnViewMore = parentContainer.querySelector(".view-more");

      if (btnViewMore) {
        btnViewMore.classList.remove("d-none");
      }

      if (head) {
        head.classList.remove("col-head-done");
      }
    }
  }
};

// Starting conditions

// Submit Email
btnSubmit.addEventListener("click", function () {
  const emailValue = email.value;
  if (emailValue === "") {
    alert("Enter email!");
  } else if (isValidEmail(emailValue)) {
    emailEl.classList.add("d-none");
    infoEl.classList.remove("d-none");
  } else if (!isValidEmail(emailValue)) {
    alert("Wrong email!");
  }
});

// View more
for (let i = 0; i < btnsViewMore.length; i++) {
  const btn = btnsViewMore[i];
  btn.addEventListener("click", openViewMoreLess);
}

for (let i = 0; i < btnsViewLess.length; i++) {
  const btn = btnsViewLess[i];
  btn.addEventListener("click", openViewMoreLess);
}
