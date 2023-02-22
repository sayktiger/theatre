import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import pushCard from "./modules/pushCart";
import showCard from "./modules/showCard";

document.addEventListener(`DOMContentLoaded`, () => {
    

    const heroSwiper = new Swiper('.hero__swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      const actorsSwiper = new Swiper('.actors-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        spaceBetween: 40,
        slidesPerView: 5,
      });

      const newsSwiper = new Swiper('.news-link-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        spaceBetween: 40,
        slidesPerView: 3,
      });



      scrolling();
      pushCard();
      showCard(`.poster__more-btn`);
});

 

  