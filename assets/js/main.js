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

// Load More
$(document).ready(function() {
  $(".item").slice(0,2).fadeIn().css('display', 'flex');
  $(".load-more").click(function(){
    $(".item").slice(0,6).fadeIn().css('display', 'flex');
    $(this).fadeOut();
  })
})

// Send email
var submitEmail = document.getElementById('form-btn');

submitEmail.addEventListener('click', function(event){
  event.preventDefault()
  var nama = document.getElementById('name').value;
  var emailSender = "muhammadsopian901@gmail.com";
  var emailValue = document.getElementById("email").value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value; 

  let body = `Halo, saya ${nama}. Dengan email ${emailValue} ini saya bermaksud untuk ${message}. Terima kasih.`


  Email.send({
    SecureToken: "d523dd29-4552-4c9c-a6fb-610d3523c463",
    Host : "smtp.elasticemail.com",
    Username : "muhammadsopian452@gmail.com",
    Password : "3D9DC8A819098803F8D288917996D2917648",
    To : 'muhammadsopian452@gmail.com',
    From : emailSender,
    Subject : subject,
    Body : body
  }).then(
  message => alert(message)
  );
})