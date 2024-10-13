document.addEventListener('DOMContentLoaded', () => {
    // Seu código aqui
    let cont = 1;

    // Inicializa com o primeiro rádio marcado
    const element = document.getElementById('radio_01');
    if (element) {
        element.checked = true;
    }

    // Função que será executada a cada 5 segundos
    setInterval(() => {
        nextImg();
    }, 5000);

    // Função que altera o slide
    function nextImg() {
        cont++;

        // Volta para o primeiro slide após o último
        if (cont > 4) {
            cont = 1;
        }

        const radio = document.getElementById(`radio_0${cont}`);

        // Verifica se o rádio existe antes de marcar como checked
        if (radio) {
            radio.checked = true;
        } else {
            console.error('Elemento de rádio não encontrado');
        }
    }
});