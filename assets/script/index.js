const navbar = document.querySelector('.navbar');
const snapContainer = document.querySelector('.snapContainer');
let lastScroll = snapContainer.scrollTop;

window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});

snapContainer.addEventListener('scroll', () => {
    const currentScroll = snapContainer.scrollTop;
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.remove('hidden');
    }
    if (currentScroll < lastScroll && currentScroll < 100) {
        navbar.classList.add('hidden');
    }
    lastScroll = currentScroll;
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.hidden-element');

    const observerOptions = {
        root: null, // null means the viewport is the root
        rootMargin: '0px', // No margin around the root
        threshold: 1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element is visible
                entry.target.classList.add('fade-in-raise-up');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});