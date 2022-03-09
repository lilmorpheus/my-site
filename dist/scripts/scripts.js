function openNav() {
    document.getElementById("Nav-Pge").style.width = "100%";
    document.getElementById("Nav-Pge").style.height = "100%";
          
    document.getElementById("Nav-Pge").style.bottom = "0%";
    document.getElementById("Nav-Pge").style.left = "0%";
}
        
function closeNav() {
    document.getElementById("Nav-Pge").style.width = "0%";
    document.getElementById("Nav-Pge").style.height = "0%";
          
    document.getElementById("Nav-Pge").style.bottom = "2.75rem";
    document.getElementById("Nav-Pge").style.left = "2.75rem";
}

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuBtn.classList.remove('close');
        openNav();
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuBtn.classList.add('close');
        closeNav();
        menuOpen = false;
    }
});