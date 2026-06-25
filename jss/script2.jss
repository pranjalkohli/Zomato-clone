// Smooth scrolling effect

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {

        const target = this.getAttribute('href');

        if(target.startsWith('#')) {
            e.preventDefault();

            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Fade-in animation on scroll

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card, section").forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
});


// Register button effect

const registerBtn = document.querySelector("section:nth-child(2) a");

if(registerBtn){

    registerBtn.addEventListener("click", () => {

        registerBtn.innerText = "Redirecting...";

        setTimeout(() => {
            registerBtn.innerText = "Register your account";
        }, 2000);

    });

}


// Header shadow on scroll

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    }
    else{
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }

});