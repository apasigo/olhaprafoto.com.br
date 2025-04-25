
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    carousel.classList.add("carousel-container");

    const images = [
        "./IMG/foto.jpg?text=Imagem+1",
        "./IMG/foto1.jpg?text=Imagem+1",
        "./IMG/foto2.jpg?text=Imagem+1",
        "./IMG/foto3.jpg?text=Imagem+1",
        "./IMG/foto4.jpg?text=Imagem+1",
        "./IMG/foto5.jpg?text=Imagem+1",
        "./IMG/foto6.jpg?text=Imagem+1",
        "./IMG/foto7.jpg?text=Imagem+1",
        "./IMG/foto8.jpg?text=Imagem+1",
        "./IMG/foto9.jpg?text=Imagem+1",
        "./IMG/foto10.jpg?text=Imagem+1",
        "./IMG/foto11.jpg?text=Imagem+1",
        "./IMG/foto12.jpg?text=Imagem+1",
    ];

    images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Imagem do carrossel";
        img.style.minWidth = "10%";
        img.style.minHeight = "10"
        carousel.appendChild(img);
    });

    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        carousel.scrollTo({
            left: currentIndex * carousel.clientWidth,
            behavior: "smooth"
        });
    }, 5000);
});
