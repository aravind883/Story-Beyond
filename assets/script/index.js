const navbar = document.querySelector('.navbar');
const snapContainer = document.querySelector('.snapContainer');
let lastScroll = snapContainer.scrollTop;

window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});

snapContainer.addEventListener('scroll', () => {
    console.log(snapContainer.scrollTop);
    const currentScroll = snapContainer.scrollTop;
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.remove('hidden');
    }
    if (currentScroll < lastScroll && currentScroll < 100) {
        navbar.classList.add('hidden');
    }
    lastScroll = currentScroll;
});
