let slideIndex = 0;
callByPos()

function callByPos(){
    if(window.scrollY < 1000)
        showSlides()
    else
        callByPos()
}

function showSlides() {
        let i;
        const slides = document.getElementsByClassName("prez_element");

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(callByPos, 5000);
}