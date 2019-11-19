function validaForm(frm){

    if (frm.nome.value == " " || frm.nome.value == null || frm.nome.value.lenght < 3 ){
        alert("Por favor, insira seu nome corretamente !");
        frm.nome.focus();
        return false;
    }

}
