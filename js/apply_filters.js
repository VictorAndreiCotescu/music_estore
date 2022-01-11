const button = document.querySelector('input#aplica');

const cb_ch = document.querySelector('input#ch_bs');
const cb_cl = document.querySelector('input#claviaturi');
const cb_tb = document.querySelector('input#tobe');
const cb_ac = document.querySelector('input#acc');


button.addEventListener('click', submit);

function submit() {
    let query=""
    if(cb_ch.checked){
        query="?"
        query += "&categorie=chitara";
    }
    if(cb_cl.checked){
        query="?"
        query += "&categorie=pian";
    }
    if(cb_tb.checked){
        query="?"
        query += "&categorie=tobe";
    }
    if(cb_ac.checked){
        query="?"
        query += "&categorie=acc";
    }

    window.location.href += query
}
