document.addEventListener("DOMContentLoaded", function () {
  const navbarMenu = document.getElementById("navbar-menu");
  const sections = document.querySelectorAll("section");
  const navbarLists = document.querySelectorAll(".navbar-list a");

  function updateNavbarColor() {
    const scrollPosition = window.scrollY;

    // Check if scrolled down
    if (scrollPosition > 0) {
      navbarMenu.style.backgroundColor = "#2D4263";
    } else {
      navbarMenu.style.backgroundColor = "transparent";
    }

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - navbarMenu.clientHeight;
      const sectionBottom = sectionTop + section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navbarLists.forEach((navbarList) => {
          navbarList.classList.remove("active");
        });

        navbarLists[index].classList.add("active");
      }
    });
  }
  updateNavbarColor();
  window.addEventListener("scroll", updateNavbarColor);
});

// Modal Certificate
document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModalBtn");
  const modal = document.getElementById("modal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close the modal if the user clicks outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModalBtn.click();
    }
  });
});

// Swiper Project
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
