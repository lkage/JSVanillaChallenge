const loginForm = document.getElementById("login-form");
const loginButton = loginForm.querySelector("button");
const loginInput = loginForm.querySelector("input");
const h2 = document.getElementById("userName");
function paintH2(input) {
  h2.innerText = `Hello ${input}`;
  h2.classList.remove("hidden");
}
function login(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  localStorage.setItem("username", username);
  paintH2(username);
}
const savedUsername = localStorage.getItem("username");
if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", login);
} else {
  paintH2(savedUsername);
}
