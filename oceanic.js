const nav = document.querySelector('.navbar');
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () =>{
    if(lastScrollY < window.scrollY){
        nav.classList.add("nav-hidden")
    }
    else{
        nav.classList.remove("nav-hidden")
    }

    lastScrollY = window.scrollY;
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    });
});

let hidden = document.querySelectorAll('.hidden');
let circ = document.querySelectorAll('.circ');
let circs = document.querySelectorAll('.circs');
let circd = document.querySelectorAll('.circd');
let ublack = document.querySelectorAll('.u-black');
let it1 = document.querySelectorAll('.it1');
let it2 = document.querySelectorAll('.it2');
let it3 = document.querySelectorAll('.it3');


hidden.forEach((el) => observer.observe(el));
circ.forEach((el) => observer.observe(el));
circs.forEach((el) => observer.observe(el));
circd.forEach((el) => observer.observe(el));
ublack.forEach((el) => observer.observe(el));
it1.forEach((el) => observer.observe(el));
it2.forEach((el) => observer.observe(el));
it3.forEach((el) => observer.observe(el));
