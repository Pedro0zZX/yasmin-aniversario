// Função para criar confetes
function createConfetti() {
    const container = document.getElementById('confetti-container');
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        confetti.style.animationDuration = `${2 + Math.random() * 2}s`;
        container.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

// Botão de celebração
document.getElementById('celebration-btn').addEventListener('click', () => {
    createConfetti();
});

// Verificar e exibir imagens opcionais
const gallery = document.getElementById('image-gallery');
const optionalImgs = gallery.getElementsByClassName('optional-img');
for (let img of optionalImgs) {
    img.onerror = () => {
        img.parentElement.style.display = 'none';
    };
    img.onload = () => {
        img.style.display = 'block';
    };
}