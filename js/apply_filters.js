const button = document.querySelector('input#aplica');

const cb_ch = document.querySelector('input#ch_bs');
const cb_cl = document.querySelector('input#claviaturi');
const cb_tb = document.querySelector('input#tobe');
const cb_ac = document.querySelector('input#acc');

const ch_ac = document.querySelector('input#ch_ac');
const ch_el = document.querySelector('input#ch_el');
const ch_ea = document.querySelector('input#ch_elac');

button.addEventListener('click', submit);

function submit() {
    let query = "";
    if (window.location.href.includes('?'))
        query = ""
    else
        query = "?"

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

    if(ch_ac.checked){
        query += "&sub_categorie=acustica";
    }

    if(ch_el.checked){
        query += "&sub_categorie=electrica";
    }

    if(ch_ea.checked){
        query += "&sub_categorie=electro-acustica";
    }


    console.log(query)
    window.location.href += query
}
