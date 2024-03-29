const navbar = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll', function() {
    console.log(this.window.scrollY);

    if (this.window.scrollY > 1) {
        navbar.classList.replace('bg-transparent', 'navbar-color');
    } else if (this.window.scrollY <= 0 ) {
        navbar.classList.replace('navbar-color', 'bg-transparent');
    }
    
});

var navLinks = document.querySelectorAll('.nav-link ');

window.addEventListener('scroll', function () {
    var currentScrollPos = window.scrollY;

    document.querySelectorAll('section').forEach(function (section, index) {
        var sectionTop = section.offsetTop - 72; 
        var sectionBottom = sectionTop + section.offsetHeight;

        if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {

            navLinks.forEach(function (link) {
            link.classList.remove('active');
            });

            navLinks[index].classList.add('active');
        }
    });
});

function galery() {
    alert("Mohon maaf saat ini belum tersedia karna masih dalam pemeliharaan");
}

function bromo() {
    window.location.href='bromo.html';
}

