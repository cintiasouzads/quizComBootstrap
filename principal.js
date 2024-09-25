let pontoTotal = 0;
let indicePergunta = 0;
let perguntas = document.querySelectorAll('.pergunta');
let proximo = document.querySelector('.btn');
let resultado = document.getElementById('res');

document.addEventListener('DOMContentLoaded', () => {
    function mostraPergunta() {
        perguntas.forEach(pergunta => {
            pergunta.classList.add('hidden');
        });
        perguntas[indicePergunta].classList.remove('hidden');
    }

    mostraPergunta();

    proximo.addEventListener('click', () => {
        respostaCorreta(); 

        indicePergunta++; 

        if(indicePergunta >= perguntas.length) {
            resultado.textContent = `Você marcou ${pontoTotal} pontos`;
            proximo.style.display='none'
            }else{
                mostraPergunta();
        }
    });

    function respostaCorreta() {
        let respostaMarcada = perguntas[indicePergunta].querySelectorAll('input[type="radio"]');
        respostaMarcada.forEach(resposta => {
            if (resposta.checked) {
                if (resposta.dataset.correct === "true") {
                    pontoTotal++;
                }
            }
        });

        perguntas[indicePergunta].style.display = 'none'; 
    }
});
