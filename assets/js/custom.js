
window.onscroll = function () {

    if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
        document.getElementById("navbar").style.position = "absolute";
    } else {
        document.getElementById("navbar").style.position = "fixed";
    }
};


document.addEventListener('DOMContentLoaded', function() {
    const humburgerIcon = document.querySelector('#humburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.mobile-menu .nav-link');
    const body = document.getElementById('body');
  
    humburgerIcon.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('show');
        body.classList.toggle('overflow-hidden');
    });
  
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            humburgerIcon.classList.remove('active');
            mobileMenu.classList.remove('show');
            body.classList.remove('overflow-hidden');
        });
    });
  });