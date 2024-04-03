var nomeGlobal;
var mensagemGlobal;
var dateGlobal;

function conferirMensagemWhatsApp() {
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var date = new Date();

    date = formatDate(date)

    nomeGlobal = nome;
    mensagemGlobal = mensagem;
    dateGlobal = date;

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
    document.getElementById("confDate").textContent = date;
    document.getElementById('conf').style.visibility = "visible";
}

function enviar() {
    var numeroTelefone = "5541999999999";

    var linkWhatsApp =
        "https://wa.me/" +
        numeroTelefone +
        "?text=Nome do receptor(a): " +
        nomeGlobal +
        " Observação: " +
        mensagemGlobal +
        " Data: " +
        dateGlobal;

    window.open(linkWhatsApp);
}

function formatDate(date) {
    let dia = date.getDate().toString().padStart(2, 0);
    let mes = (date.getMonth() + 1).toString().padStart(2, 0);
    let anoF = date.getFullYear().toString();
    let hora = date.getHours().toString().padStart(2, 0);
    let min = date.getMinutes().toString().padStart(2, 0);
    // return date.toLocaleDateString('pt-br');

    return dia + '/' + mes + '/' + anoF + ' ' + hora + ':' + min;
}

function darkmode(){
    var bool = document.body.classList.contains("light")
    console.log(bool)
    if(bool)
    {
        document.body.classList.remove("light")
        document.body.classList.add("dark")
    }
    else
    {
        document.body.classList.remove("dark")
        document.body.classList.add("light")
    }
}