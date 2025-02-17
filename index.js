function hideNav() {
    const navLinks = document.querySelectorAll('header nav ul li');
    navLinks.forEach(link => {
        link.classList.add('hidden');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(() => {
                navLinks.forEach(nav => nav.parentElement.classList.remove('hidden'));
            }, 500); // Adjust the delay as needed
        });
    });
});