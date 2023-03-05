// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");
const signUp = document.querySelector("#signUp");
const logIn = document.querySelector("#logIn");

// when menuBar Clicked

document.querySelector("#menuBar").onclick = () => {
  navbarNav.classList.toggle("active");
  signUp.classList.toggle("active");
  logIn.classList.toggle("active");
};
