const showCard = () =>{
    const showCardIn = function(){
        try{
            const btn = document.querySelector(`.poster__more-btn`),
            cards = document.querySelectorAll(`.poster__disable`);

            btn.addEventListener(`click`, (e) => {
                e.preventDefault();

                btn.remove();
                cards.forEach(card =>{
                    card.classList.add(`fade-in`);
                    card.style.cssText = `
                        transition: all 0.3s;
                        display: block;
                        opacity: 1;
                    `;
                });
            });
        }catch(e){}
        
    }

    showCardIn();
}

export default showCard;