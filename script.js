document.getElementById("btn-si").addEventListener("click", function() {
    document.getElementById("inicio").classList.add("oculto");
    document.getElementById("contenido").classList.remove("oculto");
    crearCorazones();
});

document.getElementById("btn-no").addEventListener("click", function() {
    // No hace nada
});

function crearCorazones() {
    const contenedor = document.getElementById("corazones");
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        contenedor.appendChild(heart);
    }
}
