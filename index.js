// Navbar Background Change on Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector("nav");

    if(window.scrollY > 100){

        navbar.style.background = "#0A192F";

        navbar.style.boxShadow = "0 5px 20px rgba(255,215,0,.3)";

    }else{

        navbar.style.background = "rgba(0,0,0,.7)";

        navbar.style.boxShadow = "none";

    }
});    