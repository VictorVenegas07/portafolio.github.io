let hearder = document.querySelector('header');
let menu = document.querySelector('#menu-icono');
let nav = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
    console.log(nav.classList)
}


window.onscroll = () =>{

    hearder.classList.toggle('stiky', window.scrollY > 100);
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
    console.log(window.scrollY);
};