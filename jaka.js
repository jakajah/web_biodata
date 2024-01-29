const elements = document.querySelectorAll('.animated');

function animateElements() {
    elements.forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.transition = 'opacity 1s, transform 1s';
    });
}

window.onload = animateElements;
