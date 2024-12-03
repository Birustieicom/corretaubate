const GT = document.querySelector('.GT');
const bola = document.querySelector('.bola');

let pontos = 0;
const marcador = document.createElement('div');
marcador.id = 'marcador';
marcador.textContent = `Pontos de Lorota: ${pontos}`;
marcador.style.position = 'absolute';
marcador.style.top = '10px';
marcador.style.left = '10px';
marcador.style.color = 'black';
marcador.style.fontSize = '20px';
marcador.style.fontFamily = 'Arial, sans-serif';
document.body.appendChild(marcador);

const overlay = document.createElement('div');
overlay.id = 'overlay';
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
overlay.style.color = 'white';
overlay.style.fontSize = '30px';
overlay.style.fontFamily = 'Arial, sans-serif';
overlay.style.display = 'flex';
overlay.style.alignItems = 'center';
overlay.style.justifyContent = 'center';
overlay.style.zIndex = '1000';
overlay.style.display = 'none';
document.body.appendChild(overlay);

const jump = () => {
  GT.classList.add('jump');
  pontos++;
  marcador.textContent = `Pontos de Lorota: ${pontos}`;
  marcador.style.display = 'block';
  setTimeout(() => {
    GT.classList.remove('jump');
  }, 500);
};

const loop = setInterval(() => {
  const ballPosition = bola.offsetLeft;
  const GTPosition = window.getComputedStyle(GT).bottom.replace('px', '');

  if (ballPosition <= 120 && ballPosition > 0 && GTPosition < 80) {
    bola.style.animation = 'none';
    bola.style.left = `${ballPosition}px`;

    GT.style.animation = 'none';
    GT.style.bottom = `${GTPosition}px`;

    GT.src = '../../gravidataubateperdeu.png';
    GT.style.width = '90px';

    overlay.textContent = `Parabéns, você conseguiu ${pontos} pontos de Lorota.`;
    overlay.style.display = 'flex';

    clearInterval(loop);
  }
}, 10);

window.location = '../../youarecancelado.html';

document.addEventListener('keydown', jump);