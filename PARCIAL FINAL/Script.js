

document.addEventListener("DOMContentLoaded", function() {
    const icons = document.querySelectorAll('.Contactos a i');

    icons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.color = 'blue';
        });

        icon.addEventListener('mouseout', function() {
            this.style.color = 'Black';
        });
    });
});
