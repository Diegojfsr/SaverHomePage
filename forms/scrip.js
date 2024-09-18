
let respostas = [];

function aviso(){
    alert(respostas);
}

{/* <button class="btn" href="form.html">Vamos Nessa!</button> */}

function addR1() {

    respostas.push("SEU PERFIL É CONSERVADOR");
    console.log(respostas);
    aviso();
    // renderResp();
}

function addR2() {
    respostas.push("SEU PERFIL É MODERADO");
    console.log(respostas);
    aviso();
    // renderResp();
}

function addR3() {
    respostas.push("SEU PERFIL É ARROJADO");
    console.log(respostas);
    aviso();
    // renderResp();
}

function addR4() {
    respostas.push("SEU PERFIL É MODERADO");
    console.log(respostas);
    aviso();
    // renderResp();
}

function renderResp() {
    let respList = document.getElementById("respList");
    respList.innerHTML = "";
   respostas.forEach(respostas => {
        let li = document.createElement("li");
        li.textContent = respostas;
        respList.appendChild(li);
        console.log("deu certo")
    });
}

