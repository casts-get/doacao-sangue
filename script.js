const form = document.getElementById("formDoacao");
const mensagem = document.getElementById("mensagem");
const lista = document.getElementById("listaDoadores");

let doadores = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    mensagem.textContent = "";

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = parseInt(document.getElementById("idade").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const tipoSanguineo = document.getElementById("tipoSanguineo").value;
    const telefone = document.getElementById("telefone").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();



    if (!nome.includes(" ")) {
        mensagem.textContent = "O nome deve conter nome e sobrenome.";
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValido.test(email)) {
        mensagem.textContent = "Email inválido.";
        return;
    }

    if (idade < 16) {
        mensagem.textContent = "Idade mínima é 16 anos.";
        return;
    }

    if (peso < 50) {
        mensagem.textContent = "Peso mínimo é 50kg.";
        return;
    }

    if (tipoSanguineo === "") {
        mensagem.textContent = "Selecione um tipo sanguíneo.";
        return;
    }

    const telefoneValido = /^[0-9]+$/;
    if (!telefoneValido.test(telefone)) {
        mensagem.textContent = "Telefone deve conter apenas números.";
        return;
    }

    if (!nome || !email || !cidade || !estado || !telefone) {
        mensagem.textContent = "Todos os campos são obrigatórios.";
        return;
    }


    const doador = {
        nome: nome,
        email: email,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        telefone: telefone,
        cidade: cidade,
        estado: estado
    };

    
    doadores.push(doador);

    console.log(doadores);

    mensagem.style.color = "green";
    mensagem.textContent = "Cadastro realizado com sucesso!";

    form.reset();

    mostrarDoadores();
});

function mostrarDoadores() {
    lista.innerHTML = "";

    doadores.forEach(d => {
        const div = document.createElement("div");
        div.classList.add("doador");

        div.innerHTML = `
            <strong>${d.nome}</strong><br>
            Email: ${d.email}<br>
            Idade: ${d.idade}<br>
            Peso: ${d.peso}kg<br>
            Tipo Sanguíneo: ${d.tipoSanguineo}<br>
            Telefone: ${d.telefone}<br>
            Cidade: ${d.cidade} - ${d.estado}
        `;

        lista.appendChild(div);
    });
}
