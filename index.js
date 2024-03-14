let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

function flipCard(event) {
    event.preventDefault();
    var card = document.getElementById("project-card");
    card.classList.toggle("flipped");
}

// Función para ajustar la posición del menú desplegable
function adjustDropdownPosition() {
    var dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function(dropdown) {
        var rect = dropdown.getBoundingClientRect();
        var windowHeight = window.innerHeight;
        var topOffset = rect.top + window.pageYOffset;

        if (topOffset + rect.height > windowHeight) {
            dropdown.classList.add('bottom');
        } else {
            dropdown.classList.remove('bottom');
        }
    });
}

// Llama a la función cuando se carga la página y cuando se redimensiona la ventana
window.addEventListener('load', adjustDropdownPosition);
window.addEventListener('resize', adjustDropdownPosition);

// Ajusta la posición del menú desplegable al pasar el ratón sobre la caja
var boxes = document.querySelectorAll('.box');

boxes.forEach(function(box) {
    box.addEventListener('mouseenter', function() {
        var dropdown = this.querySelector('.dropdown');
        dropdown.style.opacity = '1';
        dropdown.style.visibility = 'visible';
        adjustDropdownPosition(); // Ajusta la posición del menú desplegable al abrirlo
    });

    box.addEventListener('mouseleave', function() {
        var dropdown = this.querySelector('.dropdown');
        dropdown.style.opacity = '0';
        dropdown.style.visibility = 'hidden';
    });
});
