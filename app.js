// Criando o construtor para captar os dados
function Cliente(
  nome,
  email,
  cpf,
  telefone,
  cidade,
  cep,
  logradouro,
  numero,
  bairro,
  estado
) {
  this.nome = nome;
  this.email = email;
  this.cpf = cpf;
  this.telefone = telefone;
  this.cidade = cidade;
  this.cep = cep;
  this.logradouro = logradouro;
  this.numero = numero;
  this.bairro = bairro;
  this.estado = estado;
}

// Captando o UI da aplicação
function UI() {}

// Add Clientes
UI.prototype.addClientes = function (cliente) {
  // Pegando a lista
  const list = document.querySelector("#cliente-setup");
  // fazendo uma row
  const row = document.createElement("tr");
  // Passando para o HTML

  // Armazenando
  row.innerHTML = `
    <td>${cliente.nome}</td>
    <td>${cliente.email}</td>
    <td>${cliente.cpf}</td>
    <td>${cliente.telefone}</td>
    <td>${cliente.cidade}</td>
    <td>${cliente.cep}</td>
    <td>${cliente.logradouro}</td>
    <td>${cliente.numero}</td>
    <td>${cliente.bairro}</td>
    <td>${cliente.estado}</td>
    <td><a href="#" class="delete"</a>X</td>
    `;
  list.appendChild(row);
};

// Limpar campos
UI.prototype.cleanTela = function() {
    document.querySelector("#nomeCliente").value = ''
    document.querySelector("#emailCliente").value = ''
    document.querySelector("#cpfCliente").value = ''
    document.querySelector("#telefoneCliente").value = ''
    document.querySelector("#cidadeCliente").value = ''
    document.querySelector("#cepCliente").value = ''
    document.querySelector("#logradouroCliente").value = ''
    document.querySelector("#numeroCliente").value = ''
    document.querySelector("#bairroCliente").value = ''
    document.querySelector("#estadoCliente").value = ''
}

// Deletar usuário específico
UI.prototype.deleteUser = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove()
    }
}
// Eventos

document.querySelector(".form-cliente").addEventListener("submit", (e) => {
  // pegando os valores dos inputs
  const nome = document.querySelector("#nomeCliente").value,
    email = document.querySelector("#emailCliente").value,
    cpf = document.querySelector("#cpfCliente").value,
    telefone = document.querySelector("#telefoneCliente").value,
    cidade = document.querySelector("#cidadeCliente").value,
    cep = document.querySelector("#cepCliente").value,
    logradouro = document.querySelector("#logradouroCliente").value,
    numero = document.querySelector("#numeroCliente").value,
    bairro = document.querySelector("#bairroCliente").value,
    estado = document.querySelector("#estadoCliente").value;

  // Instanciando objeto
  cliente = new Cliente(
    nome,
    email,
    cpf,
    telefone,
    cidade,
    cep,
    logradouro,
    numero,
    bairro,
    estado
  );

  // Instanciando ui
  const ui = new UI();
  // Validação de dados

  if (
    (nome === "" ||
      email === "" ||
      cpf === "" ||
      telefone === "" ||
      cidade === "",
    cep === "",
    logradouro === "",
    numero === "",
    bairro === "",
    cidade === "")
  ) {
    alert("Por favor, adicione todos os campos");
  } else {
      // Irá adicionar os dados a tr
    ui.addClientes(cliente)
  }
  // Irá limpar os campós após adicionar
  ui.cleanTela()

  e.preventDefault();
});


// Deletar

document.querySelector('#cliente-setup').addEventListener('click', (e)=> {
    // Instanciando ui
  const ui = new UI();

  ui.deleteUser(e.target)

  e.preventDefault();
})
