window.onload = function () {
  let current = 0;
  const slides = document.querySelectorAll('.banner-slide');
  const dotContainer = document.getElementById('dots');

  // Tạo dấu chấm tương ứng
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToSlide(i));
    dotContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dots span');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.left = '100%';
      slide.classList.remove('active');
    });
    slides[index].style.left = '0';
    slides[index].classList.add('active');

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  function goToSlide(index) {
    current = index;
    showSlide(current);
  }

  showSlide(current); // Gọi lần đầu
  setInterval(nextSlide, 4000); // Tự động chuyển
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
};
