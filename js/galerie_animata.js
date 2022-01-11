let slideIndex = 0;
showSlides()
function showSlides() {
    let i;
    const slides = document.getElementsByClassName("galerie_animata_elem");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.scale = 0;
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.scale = 1;


    setTimeout(showSlides, 5000);
}