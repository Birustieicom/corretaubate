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
    if (!GT.classList.contains('jump')) {
        GT.classList.add('jump');
        pontos++;
        marcador.textContent = `Pontos de Lorota: ${pontos}`;
        setTimeout(() => {
            GT.classList.remove('jump');
        }, 500);
    }
};

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.key === ' ') {
        event.preventDefault();
        jump();
    }
});

const loop = setInterval(() => {
    const bolaPosition = bola.getBoundingClientRect();
    const GTPosition = GT.getBoundingClientRect();

    if (
        bolaPosition.left < GTPosition.right &&
        bolaPosition.right > GTPosition.left &&
        bolaPosition.bottom > GTPosition.top &&
        bolaPosition.top < GTPosition.bottom
    ) {
        bola.style.animation = 'none';
        bola.style.right = `${window.innerWidth - bolaPosition.left}px`;

        GT.style.animation = 'none';

        overlay.textContent = `Parabéns, você conseguiu ${pontos} pontos de Lorota.`;
        overlay.style.display = 'flex';

        clearInterval(loop);

        setTimeout(() => {
            window.location = '../../youarecancelado.html';
        }, 2000);
    }
}, 10);