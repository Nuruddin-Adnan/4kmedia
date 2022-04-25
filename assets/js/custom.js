// client review slider start
const swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    575: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
// client review slider end

// nav scroll background change
function navScrollBackground(){
  const targetElement = document.querySelector('.page-header');
  if(window.scrollY >= 500){
    targetElement.style.background = 'rgba(0, 0, 0, 0.9)'
  }
  else{
    targetElement.style.background = 'rgba(0, 0, 0, 0.6)'
  }
}

