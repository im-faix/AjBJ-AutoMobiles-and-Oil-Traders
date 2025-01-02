function adjustLayout() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        // Adjust layout for tablets and mobiles
        document.body.style.backgroundColor = "lightblue";
    } else {
        // Default layout for desktops
        document.body.style.backgroundColor = "white";
    }
}

// Run on page load and window resize
window.addEventListener("load", adjustLayout);
window.addEventListener("resize", adjustLayout);