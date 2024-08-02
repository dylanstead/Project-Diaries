document.addEventListener("DOMContentLoaded", function () {
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");
  const confirmPasswordField = document.getElementById("confirmPasswordField");
  const authForm = document.getElementById("authForm");

  loginTab.addEventListener("click", function () {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    confirmPasswordField.style.display = "none";
    authForm.querySelector("button").textContent = "Login";
  });

  signupTab.addEventListener("click", function () {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    confirmPasswordField.style.display = "block";
    authForm.querySelector("button").textContent = "Sign Up";
  });
});
