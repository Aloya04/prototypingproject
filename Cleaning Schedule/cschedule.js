
  let container = document.querySelector(".container");
  let toTopButton = document.querySelector('.to-top');

  function scrollToTop() {
    container.scrollTo({ top: 0, behavior: 'smooth' });
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      toTopButton.classList.add('show');
    } else {
      toTopButton.classList.remove('show');
    }
  });

  toTopButton.addEventListener('click', scrollToTop);
