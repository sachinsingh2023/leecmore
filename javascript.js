const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  mobileMenu.classList.toggle('hidden');
});

let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(indicator => indicator.classList.remove('bg-gray-800'));
      
      currentSlide = index;
      slides[index].classList.add('active');
      indicators[index].classList.add('bg-gray-800');
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    // Auto-play the carousel
    setInterval(nextSlide, 4000); // Change every 3 seconds