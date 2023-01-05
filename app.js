const text = document.querySelector('.text');
const btnActivo = document.querySelectorAll('.btn');

evento();

function evento() {
    
    text.addEventListener('click', dataClick);
}



function dataClick(e) {
   
    if (e.target.classList.contains('btn')) {
        btnActivo.forEach(function(a){
            if (a.classList.contains('rotar')) {
                a.classList.remove('rotar');
                a.parentElement.children[0].classList.remove('h4-activo');
                a.parentElement.parentElement.children[1].classList.remove('p-active');

                return
            }else{
                abrirCerrar(e);
            }
        })
        
    }
}


function abrirCerrar(e) {
    
    if (e.target.classList.contains('rotar')) {
        let divisor = e.target.parentElement
        divisor.children[0].classList.remove('h4-activo');
        divisor.children[1].classList.remove('rotar');
        divisor.parentElement.children[1].classList.remove('p-active')

    }else{

        if (e.target.classList.contains('btn')) {
            
        let divisor = e.target.parentElement
        divisor.children[0].classList.add('h4-activo');
        divisor.children[1].classList.add('rotar');

        divisor.parentElement.children[1].classList.add('p-active');
    }
    }

}