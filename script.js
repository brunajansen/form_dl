var button = document.getElementById('mode_icon');
const form = document.getElementById('login');
//var git = document.querySelector('.github');


button.addEventListener('click', mode);

function mode(){
    /* se se o botao contem a classe fa-moon (lua) */
    if(button.classList.contains('fa-moon')){
        /* então ele remove a lua e coloca o sol */
        
        button.classList.remove('fa-moon')
        button.classList.add('fa-sun')
        
        
        /* e adiciona o dark mode*/
        form.classList.add('dark')
       // git.src = "imagens/github2.png";
        return;
        
    }
    /* se não, ele adiciona a lua e remove o sol e remove o dark*/
    button.classList.add('fa-moon')
    button.classList.remove('fa-sun')
    form.classList.remove('dark')
    //git.src = "imagens/github.png";
}

