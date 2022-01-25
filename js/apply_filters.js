const button = document.querySelector('input#aplica');

const cb_ch = document.querySelector('input#ch_bs');
const cb_cl = document.querySelector('input#claviaturi');
const cb_tb = document.querySelector('input#tobe');
const cb_ac = document.querySelector('input#acc');

const ch_ac = document.querySelector('input#ch_ac');
const ch_el = document.querySelector('input#ch_el');
const ch_ea = document.querySelector('input#ch_elac');

button.addEventListener('click', submit);

console.log(window.location.href)
console.log(window.location.origin + window.location.pathname)

function submit() {

    let query = window.location.origin + window.location.pathname + "?"

    if(cb_ch.checked){
        query += "&categorie=chitara";
    }
    if(cb_cl.checked){
        query += "&categorie=pian";
    }
    if(cb_tb.checked){
        query += "&categorie=tobe";
    }
    if(cb_ac.checked){
        query += "&categorie=acc";
    }


    if ((ch_ac.checked || ch_el.checked || ch_ea.checked) && !cb_ch.checked){
        query += "&categorie=chitara";
    }
    if (ch_ac.checked){
        query += "&sub_categorie=acustica";
    }

    if (ch_el.checked){
        query += "&sub_categorie=electrica";
    }

    if (ch_ea.checked){

        query += "&sub_categorie=electro-acustica";
    }

    window.location.href = query
}
