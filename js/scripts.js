// Efecto máquina de escribir (Typewriter)
document.addEventListener("DOMContentLoaded", function () {
    const typewriterElement = document.getElementById("typewriter");
    if (typewriterElement) {
        const text = typewriterElement.textContent;
        typewriterElement.textContent = "";
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                typewriterElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100); // velocidad de escritura
            }
        }
        typeWriter();
    }
});

// Animación al hacer scroll (Slide-in)
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".slide-in");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        elements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

// Footer dinámico con el año actual
document.getElementById('year').textContent = new Date().getFullYear();
