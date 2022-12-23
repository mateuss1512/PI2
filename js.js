function valida() {

    let formValido = true;
    let checkboxC = false;
    let radioC = false;

    var spanNome = document.getElementById("iNome");
    var spanEmail = document.getElementById("iEmail");
    var spanDate = document.getElementById("iDate");
    var spanSexo = document.getElementById("iSex");
    var spanRec = document.getElementById("iOp");

    spanNome.textContent = "";
    spanEmail.textContent = "";
    spanDate.textContent = "";
    spanSexo.textContent = "";
    spanRec.textContent = "";

    if (document.getElementById('masc').checked) {
        checkboxC = true;
    }

    else if (document.getElementById('fem').checked) {
        checkboxC = true;
    }

    else if (document.getElementById('nbin').checked) {
        checkboxC = true;
    }

    else if (document.getElementById('ninf').checked) {
        checkboxC = true;
    }

    function isTipo(nome) {
        var valido = /[A-z]/;
        return valido.test(nome);
    }

    if (nome.value === "" || !isTipo(nome.value)) {
        document.getElementById("nome").focus();
        document.getElementById("nome").style.border = "2px solid #FF0000";
        spanNome.textContent = 'O nome deve ser preenchido!';
        formValido = false;
    }

    if (email.value === "") {
        document.getElementById("email").focus();
        document.getElementById("email").style.border = "2px solid #FF0000";
        spanEmail.textContent = 'O email deve ser informado!';
        formValido = false;
    }

    if (date.value === "") {
        document.getElementById("date").focus();
        document.getElementById("date").style.border = "2px solid #FF0000";
        spanDate.textContent = 'A data deve ser informado!';
        formValido = false;
    }

    if (document.getElementById("doubt").checked) {
        radioC = true;
    }

    else if (document.getElementById("complaint").checked) {
        radioC = true;
    }

    else if (document.getElementById("sugestion").checked) {
        radioC = true;
    }


    if (formValido && radioC && checkboxC) {
        document.getElementById("info").style.display = "block";
        document.getElementById("nomes").textContent = 'Nome: ' + nome.value;
        document.getElementById("emails").textContent = 'Email: ' + email.value;
        document.getElementById("datas").textContent = 'Data ' + date.value;
        document.getElementById("sexos").textContent = 'Sexo: ' + cat.value;
        document.getElementById("contatos").textContent = 'Tipo de contato: ' + conts.value;
        document.getElementById("everything").style.display = "none";
        
    }

}
 
function alterar() {
    document.getElementById("info").style.display = "none";
    document.getElementById("everything").style.display = "block";
}

function resetar() {
    document.getElementById("info").style.display = "none";
    document.getElementById("everything").style.display = "block";
}