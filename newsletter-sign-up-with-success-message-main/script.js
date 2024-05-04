const form = document.querySelector("form");
const input = document.querySelector("input");
const btn = document.querySelector("form button");
const resetbtn = document.querySelector(".reset");
const getEmailAd = document.querySelector(".container .getEmail");
const successPage = document.querySelector(".succes-page");
const errorMessage = document.querySelector(".error");

resetbtn.addEventListener("click", () => {
  successPage.style.display = "none";
});

function validateEmail(email) {
  const reg = /\S+@\S+\.\S+$/;
  return reg.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  input.classList.remove("errorstate");

  if (input.value === "" || !validateEmail(input.value)) {
    errorMessage.textContent = "Valid email required";
    input.classList.add("errorstate");
  } else {
    getEmailAd.textContent = input.value;
    input.value = "";
    errorMessage.textContent = "";
    successPage.style.display = "flex";
  }
});
