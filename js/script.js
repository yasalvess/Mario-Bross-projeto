const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


//função para executar o jump
const jump = () => {
mario.classList.add('jump');

setTimeout(() => {
    mario.classList.remove('jump');

}, 500);
}
//verificação em loop 
const loop = setInterval(() => {

console.log('loop')

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

console.log(marioPosition);

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = '/imagens/game-over.png';
    mario.style.width = '95px'
    mario.style.marginLeft = '25px'

    clearInterval(loop);
}
}, 10);
//quando alguma tecla for apertada, irá executar a função jump
document.addEventListener('keydown', jump);