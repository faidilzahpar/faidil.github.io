document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const aboutSection = document.querySelector("#about");

  window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    let aboutTop = aboutSection.offsetTop;
    let aboutHeight = aboutSection.offsetHeight;

    if (scrollY >= aboutTop - 50 && scrollY <= aboutTop + aboutHeight) {
      // Jika masuk ke dalam #about, navbar menjadi bg-dark
      navbar.classList.remove("scrolled");
      navbar.classList.add("bg-dark");
    } else if (scrollY > 50) {
      // Jika scroll lebih dari 50px, navbar menjadi transparan
      navbar.classList.remove("bg-dark");
      navbar.classList.add("scrolled");
    } else {
      // Jika di paling atas, navbar kembali ke bg-dark
      navbar.classList.remove("scrolled");
      navbar.classList.add("bg-dark");
    }
  });
});