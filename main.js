const btn = document.getElementById("download-btn");

function btnClass() {
  if (window.innerWidth <= 768) {
    btn.classList.remove("btn-lg");
    btn.classList.add("btn-sm");
  } else {
    btn.classList.remove("btn-sm");
    btn.classList.add("btn-lg");
  }
}
btnClass();
window.addEventListener("resize", btnClass);
