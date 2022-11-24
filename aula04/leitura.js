const dados = require("./cliente.json");

console.log(dados);

console.log(`Cliente ${dados.nome} com o email ${dados.email}`);

console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);

console.log(typeof clienteEmString);

const stringEmJson = JSON.parse(clienteEmString);

console.log(stringEmJson);

console.log(typeof stringEmJson);
