const navbarToogle = document.getElementById("navbar-toggle");
const navbarMenu = document.getElementById("navbar-menu");

if(navbarToogle && navbarMenu) {
    navbarToogle.addEventListener("click", ()=> {
        const isOpen = navbarMenu.classList.toggle("open");
        navbarToogle.setAttribute("aria-expanded", isOpen);
    });
}