document.querySelector("#btn-click").addEventListener("click", function () {
  document.body.classList.add("active-popup");
});

document
  .querySelector(".btn-popup .btn-active")
  .addEventListener("click", function () {
    document.body.classList.remove("active-popup");
  });
