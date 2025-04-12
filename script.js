document.addEventListener('DOMContentLoaded', () => {
    console.log('script.js loaded');

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        console.log('Hamburger and navMenu elements found');
        hamburger.addEventListener('click', () => {
            console.log('Hamburger clicked');
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close the menu when a menu item is clicked
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                console.log('Menu item clicked');
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    } else {
        console.error('Hamburger or navMenu element not found');
    }

    // Tab Functionality for About Section
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    window.opentab = function(tabname) {
        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    };

    // Flip Card Functionality for Gallery
    const flipCards = document.querySelectorAll('.flip-card');

    flipCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // Scroll Animation for News Items
    const newsItems = document.querySelectorAll('.news-item');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, index * 200); // Stagger the animation by 200ms for each item
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    newsItems.forEach(item => {
        observer.observe(item);
    });

    // Scroll Animation for Award Items
    const awardItems = document.querySelectorAll('.award-item');

    awardItems.forEach(item => {
        observer.observe(item);
    });
});