import "./style.css";
const body = document.querySelector("body");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 600 ||
    document.documentElement.scrollTop > 600
  ) {
    body.classList.add("flicker-1");
  } else {
    body.classList.remove("flicker-1");
  }
}
