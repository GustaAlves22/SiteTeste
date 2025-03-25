document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.85) {
                section.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});
document.addEventListener("DOMContentLoaded", function () {
    // Verifica se o dispositivo é mobile
    function isMobile() {
        return window.innerWidth <= 768; 
    }

    // Adiciona evento de clique nos links do menu
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            if (isMobile()) {
                e.preventDefault(); // Evita a navegação instantânea
                let targetId = this.getAttribute("href").substring(1);
                let targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    let headerOffset = document.querySelector("header").offsetHeight + 15; // Compensa altura do cabeçalho
                    let elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                    let offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
