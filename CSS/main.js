// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const projectImages = document.querySelectorAll('.project-slider img');
    let currentImageIndex = 0;

    setInterval(() => {
        projectImages[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % projectImages.length;
        projectImages[currentImageIndex].style.display = 'block';
    }, 3000);
});
