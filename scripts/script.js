// Hamburger Menu Function
// Get elements
/* HAMBURGER */

function hamburger(){
    var menu = document.getElementById("menu-links")
    var logo = document.getElementById("tago")

    if (menu.style.display === "block" && logo.style.display === "none"){
        menu.style.display = "none";
        logo.style.display = "block";
    }
    else{
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

/* Clickable images*/
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.community-item-img');

    const semiFullscreenContainer = document.createElement('div');
    semiFullscreenContainer.className = 'semi-fullscreen';
    semiFullscreenContainer.style.display = 'none';
    semiFullscreenContainer.style.position = 'fixed';
    semiFullscreenContainer.style.top = '0';
    semiFullscreenContainer.style.left = '0';
    semiFullscreenContainer.style.width = '100%';
    semiFullscreenContainer.style.height = '100%';
    semiFullscreenContainer.style.justifyContent = 'center';
    semiFullscreenContainer.style.alignItems = 'center';
    semiFullscreenContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    document.body.appendChild(semiFullscreenContainer);

    images.forEach(img => {
        img.addEventListener('click', function() {
            semiFullscreenContainer.innerHTML = `<img src="${img.src}" alt="Fullscreen Image" style="max-width: 90%; max-height: 90%;">`;
            semiFullscreenContainer.style.display = 'flex';
        });
    });

    semiFullscreenContainer.addEventListener('click', () => {
        semiFullscreenContainer.style.display = 'none';
    });
});
