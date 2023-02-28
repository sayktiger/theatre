const burger = (menuSelector, burgerSelector, closeSelector) => {
    const burgerElem = document.querySelector(burgerSelector),
        menuElem = document.querySelector(menuSelector),
        closeElem = document.querySelector(closeSelector);
    let scroll = calcScroll();
    
    // burgerElem.forEach((burger,i) =>{
    //     burger.addEventListener(`click`, () =>{
    //         if(menuElem[i].style.display = 'none' && window.screen.availWidth < 1024){
    //             menuElem[i].classList.add(`mobile-menu__active`);
    //             document.body.style.overflow = 'hidden';
    //             document.body.style.marginRight = `${scroll}px`;
    //         }
    //     });
    // })

    burgerElem.addEventListener(`click`, () =>{
        if(menuElem.style.display = 'none' && window.screen.availWidth < 1025){
            menuElem.classList.add(`mobile-menu__active`);
            document.body.style.overflow = 'hidden';
            document.body.style.overflowX = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }
    });
    // closeElem.forEach((close,i) =>{
    //     close.addEventListener(`click`, () =>{
    //         if(menuElem[i].style.display = 'block' && window.screen.availWidth < 1025){
    //             menuElem[i].classList.remove(`mobile-menu__active`)
    //             document.body.style.overflow = 'auto';
    //             document.body.style.marginRight = `0px`;
    //         }
    //     });
    // })

    closeElem.addEventListener(`click`, () =>{
        if(menuElem.style.display = 'block' && window.screen.availWidth < 1025){
            menuElem.classList.remove(`mobile-menu__active`)
            document.body.style.overflow = 'auto';
            document.body.style.overflowX = 'hidden';
            document.body.style.marginRight = `0px`;
        }
    });


    // burgerElem.addEventListener(`click`, () =>{
    //     if(menuElem.style.display = 'none' && window.screen.availWidth < 1024){
    //         menuElem.classList.add(`mobile-menu__active`);
    //         document.body.style.overflow = 'hidden';
    //         document.body.style.marginRight = `${scroll}px`;
    //     }
    // });

    
    // closeElem.addEventListener(`click`, () =>{
    //     if(menuElem.style.display = 'none' && window.screen.availWidth < 1024){
    //         menuElem.classList.remove(`mobile-menu__active`)
    //         document.body.style.overflow = 'auto';
    //         document.body.style.marginRight = `0px`;
    //     }
    // });

    function calcScroll(){
        let div = document.createElement(`div`);

        div.style.width = `50px`;
        div.style.height = `50px`;
        div.style.overflowY = `scroll`;
        div.style.visibility = `hidden`;
        
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove()

        return scrollWidth;
    }
    
};

export default burger;