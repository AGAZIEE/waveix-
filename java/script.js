function tooglemenu(){
    const menu =document.queryselector(".menu-links")
    const icon =document.queryselector(".hamburger-icon")
    menu.classlist.toggle ("open");
    icon.classlist.toggle ("open");   
}
let currentIndex = 0;

function openFullScreen(imagePath, title, description) {
    document.getElementById("fullScreenOverlay").style.display = "flex";
    document.getElementById("fullScreenImage").src = imagePath;
    document.getElementById("overlayTitle").innerText = title;
    document.getElementById("overlayDescription").innerText = description;
}

function closeFullScreen() {
    document.getElementById("fullScreenOverlay").style.display = "none";
}
function openInNewTab(imageSrc) {
    window.open(imageSrc, '_blank');
}
