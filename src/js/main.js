import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import pushCard from "./modules/pushCart";
import showCard from "./modules/showCard";

document.addEventListener(`DOMContentLoaded`, () => {
    burger(`.mobile-menu`, `.header__burger`,`.mobile-menu__close`);
    scrolling();
    pushCard();
    showCard();

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

      const newsAllSwiper = new Swiper('.news-all__swiper', {
        // Optional parameters
        direction: 'horizontal',
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          dynamicMainBullets: 3,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
          
        },
        
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        spaceBetween: 40,
        slidesPerView: 1,
      });

      // function bullets(){
      //   const spans = document.querySelectorAll(`.swiper-pagination-bullet`);
      //   console.log(spans);
      //     spans.forEach((span,i) =>{
      //       if(span[i].textContent === 2){
      //         span[i].textContent = `.`;
      //       } else if(span[i].textContent === 3){
      //         span[i].textContent = `.`;
      //       } else if(span[i].textContent === 4){
      //         span[i].textContent = `.`;
      //       }
      //     });
      // };
      // bullets();


      const performanceAllSwiper = new Swiper('.performances-all__swiper', {
        // Optional parameters
        direction: 'horizontal',
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          dynamicMainBullets: 3,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
          
        },
        
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        spaceBetween: 40,
        slidesPerView: 1,
      });

      const actorsDelSwiper = new Swiper('.actor-del-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        spaceBetween: 40,
        slidesPerView: 4,
      });
      
});

 

  