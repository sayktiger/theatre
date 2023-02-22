const pushCard = () =>{
    const pushkins = document.querySelectorAll(`.poster__push`),
        pushkinsText = document.querySelectorAll(`.poster__img-text`);

    pushkins.forEach((item, i )=>{
        item.addEventListener(`mouseover`, () =>{
            pushkinsText[i].classList.add(`poster__img-text__active`);
        });

        item.addEventListener(`mouseout`, () =>{
            pushkinsText[i].classList.remove(`poster__img-text__active`);
        });
    });
}

export default pushCard;