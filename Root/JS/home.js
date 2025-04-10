document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".links");

    if (navToggle && navLinks) {
        navToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            // Toggle aria-expanded for accessibility
            const isExpanded = this.getAttribute("aria-expanded") === "true";
            this.setAttribute("aria-expanded", !isExpanded);
        });
        
        // Close menu when clicking on a link (optional)
        const navItems = document.querySelectorAll(".links ul li a");
        navItems.forEach(item => {
            item.addEventListener("click", () => {
                navLinks.classList.remove("active");
                navToggle.setAttribute("aria-expanded", "false");
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const serviceContainer = document.querySelector('.service-container');
    const serviceItems = document.querySelectorAll('.service-item');
    const moveLeftBtn = document.getElementById('move-left');
    const moveRightBtn = document.getElementById('move-right');
    const dotsContainer = document.querySelector('.dots');
    
    let currentIndex = 0;
    let itemsPerPage = 3;
    const totalItems = serviceItems.length;
    
    // Calculate items per page based on screen size
    function calculateItemsPerPage() {
        if (window.innerWidth <= 480) {
            return 1;
        } else if (window.innerWidth <= 768) {
            return 1;
        } else if (window.innerWidth <= 1024) {
            return 2;
        } else {
            return 3;
        }
    }
    
    // Initialize carousel
    function initCarousel() {
        itemsPerPage = calculateItemsPerPage();
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        
        // Create dots
        dotsContainer.innerHTML = '';
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToPage(i));
            dotsContainer.appendChild(dot);
        }
        
        updateCarousel();
    }
    
    // Update carousel position
    function updateCarousel() {
        const itemWidth = serviceItems[0].offsetWidth + 20; // Include margin
        const transformValue = -currentIndex * itemWidth;
        serviceContainer.style.transform = `translateX(${transformValue}px)`;
        
        // Update dots
        const activePage = Math.floor(currentIndex / itemsPerPage);
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === activePage);
        });
        
        // Update button states
        moveLeftBtn.disabled = currentIndex === 0;
        moveRightBtn.disabled = currentIndex >= totalItems - itemsPerPage;
    }
    
    // Go to specific page
    function goToPage(pageIndex) {
        currentIndex = pageIndex * itemsPerPage;
        updateCarousel();
    }
    
    // Event listeners
    moveLeftBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex = Math.max(0, currentIndex - itemsPerPage);
            updateCarousel();
        }
    });
    
    moveRightBtn.addEventListener('click', () => {
        if (currentIndex < totalItems - itemsPerPage) {
            currentIndex = Math.min(totalItems - itemsPerPage, currentIndex + itemsPerPage);
            updateCarousel();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        initCarousel();
    });
    
    // Initialize
    initCarousel();
});

