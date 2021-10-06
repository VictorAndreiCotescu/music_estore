mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        mybutton.style.display = "img";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

} 