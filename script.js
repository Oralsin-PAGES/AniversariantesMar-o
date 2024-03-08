document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "Parabens.png",
        "Parabens2.jpeg",
        "04-03-2024.jpeg",
        "04-03.jpeg",
        "17-03.jpeg",
        "21-03.jpeg",
        "21-03-2024.jpeg",
        "22-03.jpeg",
        "23-03.jpeg",
        "24-03.jpeg",
        "28-03-2024.jpeg",
        "28-03.jpeg",
        "29-03-NRN.jpeg",
        // Adicione mais imagens aqui
    ];

    let currentIndex = 0;
    const centeredImage = document.querySelector(".centered-image");

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const imageUrl = images[currentIndex];
        centeredImage.src = imageUrl;
    }

    // Inicializa a troca de imagem a cada 5 segundos
    setInterval(changeImage, 5000);

    // Carrega a primeira imagem
    changeImage();
});
