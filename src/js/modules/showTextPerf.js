const showTextPerf = () =>{
    const showPerf = function(){
        try{
            const btns = document.querySelectorAll(`.performances-all__show`),
            blocks = document.querySelectorAll(`.performances-all__descr`);
            
            btns.forEach(btn => {
                btn.addEventListener(`click`, (e) =>{
                e.preventDefault();
                if(e.target){
                    blocks.forEach((block) =>{
                        btn.remove();
                        block.classList.add(`fade-in`);
                        block.style.maxHeight = `100%`;
                        block.style.overflow = `auto`;
                    });
                }
                
            })
            });
            
        }catch(e){}
    }

    showPerf();
}

export default showTextPerf;