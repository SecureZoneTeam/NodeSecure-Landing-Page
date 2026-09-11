document.addEventListener("DOMContentLoaded", () => {
    const navbarToggle = document.getElementById("navbar-toggle");
    const navbarMenu = document.getElementById("navbar-menu");

    if (navbarToggle && navbarMenu) {

        navbarToggle.addEventListener("click", () => {

            const isOpen = navbarMenu.classList.toggle("open");

            navbarToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });
        const navLinks = navbarMenu.querySelectorAll(".nav-link");

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                navbarMenu.classList.remove("open");

                navbarToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById("contact-name");
            const email = document.getElementById("contact-email");
            const message = document.getElementById("contact-message");

            if (!name.value.trim() ||
                !email.value.trim() ||
                !message.value.trim()) {

                alert("Por favor, completa los campos obligatorios.");

                return;
            }
            alert(
                `Gracias ${name.value.trim()}. Hemos recibido tu mensaje.`
            );

            contactForm.reset();

        });

    }

});