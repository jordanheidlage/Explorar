const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
  navToggler.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
  console.log(toggleNav);
}

/* close nav when clicking on a nav item*/
document.addEventListener("click", function (event) {
  if (event.target.closest(".nav-item")) {
    toggleNav();
  }
});

/*-------------sticky header--------------*/
window.addEventListener("scroll", function () {
  if (this.scrollY > 60) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
});