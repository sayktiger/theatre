const showCard = (selector) =>{
    const btn = document.querySelector(selector),
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
    })
}

export default showCard;