import burger from "./modules/burger";
import scrolling from "./modules/scrolling";
import pushCard from "./modules/pushCart";
import showCard from "./modules/showCard";
import showAbout from "./modules/showAbout";
import showTextPerf from "./modules/showTextPerf";

document.addEventListener(`DOMContentLoaded`, () => {
    burger(`.mobile-menu`, `.header__burger`,`.mobile-menu__close`);
    scrolling();
    pushCard();
    showCard();
    showAbout();
    showTextPerf();

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
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 480px
          361: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 640px
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1025: {
            spaceBetween: 40,
            slidesPerView: 5,
          }
        }
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
        breakpoints: {
          // when window width is >= 320px
          
          // when window width is >= 480px
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 640px
          1024: {
            spaceBetween: 40,
            slidesPerView: 3,
          }
        }
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
        breakpoints: {
          // when window width is >= 320px
          
          // when window width is >= 480px
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          420: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          1024: {
            spaceBetween: 40,
            slidesPerView: 4,
          },
        }
      });
      
});

 

  