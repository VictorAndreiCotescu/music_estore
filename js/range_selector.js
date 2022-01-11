let min_slider = document.getElementById("range_min");
let max_slider = document.getElementById("range_max");
let min_slider_value = document.getElementById("min_value");
let max_slider_value = document.getElementById("max_value");

min_slider_value.innerHTML = min_slider.value;
max_slider_value.innerHTML = max_slider.value;

min_slider.oninput = function() {
    min_slider_value.innerHTML = this.value;
}
max_slider.oninput = function() {
    max_slider_value.innerHTML = this.value;
}