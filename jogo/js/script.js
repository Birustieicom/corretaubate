const GT = document.querySelector('.GT');
const bola = document.querySelector('.bola');

const jump = () => {
  GT.classList.add('jump');

  setTimeout(() => {

  GT.classList.remove('jump');

  }, 500)

}

const loop = setInterval(() => {

  const ballPosition = bola.offsetLeft;
  const GTPosition = window.getComputedStyle(GT).bottom.replace('px', '');

  if(ballPosition <= 120 && ballPosition > 0  && GTPosition < 80) {

    bola.style.animation = 'none';
    bola.style.left = `${ballPosition}px`;

    GT.style.animation = 'none';
    GT.style.bottom = `${GTPosition}px`

    GT.src = '../../gravidataubateperdeu.png'
    GT.style.width="90px"

  }

}, 10);

document.addEventListener('keydown', jump);

