const showAbout = () =>{
    const show = function(){
        try{
            const btn = document.querySelector(`.about__show`),
            blocks = document.querySelectorAll(`.about__descr`);
        
            btn.addEventListener(`click`, (e) =>{
                e.preventDefault();

                blocks.forEach((block) =>{
                    btn.remove();
                    block.classList.add(`fade-in`);
                    block.classList.add(`about__descr_active`);
                });
            })
        }catch(e){}
    }

    show();
}

export default showAbout;