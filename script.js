 // Toggle mobile menu visibility
 document.getElementById('menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Change logo on hover
const logo = document.getElementById('logo');
logo.addEventListener('mouseover', () => {
    logo.src = 'Photos/OnBulb.png';
});
logo.addEventListener('mouseout', () => {
    logo.src = 'Photos/OffBulb.png';
});

 