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
        threshold: 0 // Trigger when 10% of the element is visible
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


// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
// starting from v2 you can add only the features you need reducing the bundle size
$(document).ready(async function () {
    await loadFull(tsParticles);
    $("#tsparticles")
        .particles()
        .init(
            {
                background: {
                    color: {
                        value: "#101010",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        grab: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            },
            function (container) {
                // container is the particles container where you can play/pause or stop/start.
                // the container is already started, you don't need to start it manually.
            },
        );
});

toggleMenu = () => {
    const menu = document.querySelector('.navbar .nav-links');
    menu.classList.toggle('active');
};