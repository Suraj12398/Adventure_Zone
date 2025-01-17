
hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}


function autoScrollHorizontally(element, stepSize, interval) {
    const container = document.querySelector(element);
    const contentWidth = container.scrollWidth;
    let scrollDirection = 1; // 1 for forward, -1 for backward
    let scrollInterval; // Declare the variable here, so we can use it later

    // Function to perform the scrolling action
    function scrollStep() {
        container.scrollLeft += stepSize * scrollDirection;

        // Change scroll direction when reaching the end of the content
        if (container.scrollLeft >= contentWidth - container.clientWidth || container.scrollLeft <= 0) {
            scrollDirection *= -1;
        }
    }

    // Function to start the auto-scrolling
    function startAutoScroll() {
        scrollInterval = setInterval(scrollStep, interval);
    }

    // Start auto-scrolling initially
    startAutoScroll();

    // Pause auto-scrolling on mouseenter
    container.addEventListener('mouseenter', function() {
        clearInterval(scrollInterval);
    });

    // Resume auto-scrolling on mouseleave
    container.addEventListener('mouseleave', function() {
        startAutoScroll(); // Restart the auto-scrolling after mouseleave
    });
}

// Call the autoScrollHorizontally function with the element to scroll, step size, and interval in milliseconds
autoScrollHorizontally('.exploreAdv', 1.2, 30);



