// Formulario con mensaje
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("¡Gracias por contactarnos! 🍻 Te responderemos pronto.");
    form.reset();
  });

  // Slider
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  const dotsContainer = document.querySelector(".dots");
  let index = 0;

  slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");
  updateSlider();

  function updateSlider() {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
  }

  function goToSlide(i) {
    index = i;
    updateSlider();
  }

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);
  setInterval(nextSlide, 6000);

  // Navbar responsive
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

// Animación de entrada al hacer scroll
const serviceCards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running";
    }
  });
}, { threshold: 0.2 });

serviceCards.forEach(card => {
  card.style.animationPlayState = "paused";
  observer.observe(card);
});
