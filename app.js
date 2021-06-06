const closer = document.querySelector(".closer");
const toggle = document.querySelector(".nav-toggle");
const sideBar = document.querySelector(".sidebar-container");
const skills = document.querySelector(".skills");
const btns = document.querySelectorAll(".btn-skills");
const info = document.querySelectorAll(".content-skills");
console.log(info);

skills.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active-btn");
      e.target.classList.add("active-btn");
    });
    info.forEach(function (item) {
      item.classList.remove("active");
      const active = document.getElementById(id);
      console.log(active);
      active.classList.add("active");
    });
  }
});
toggle.addEventListener("click", function () {
  sideBar.classList.add("show-sidebar");
  console.log(sideBar);
});
closer.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});
