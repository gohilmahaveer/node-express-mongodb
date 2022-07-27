// function myaddition() {
//     var f1prise = parseInt(document.getElementById('f1prise').value);
//     var g1prise = parseInt(document.getElementById('g1prise').value);
//     var f2prise = parseInt(document.getElementById('f2prise').value);
//     var g2prise = parseInt(document.getElementById('g2prise').value);
//     var f3prise = parseInt(document.getElementById('f3prise').value);
//     var g3prise = parseInt(document.getElementById('g3prise').value);
//     var total = f1prise + g1prise + f2prise + g2prise + f3prise + g3prise;
//     document.getElementById('total').value = total;
// }

function showPassword() {
    let x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

window.onload = (event) => {
    
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';    
    }, 800);;
    
  };

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});