const clientes = require("./clientes.json");

function encontrar(lista, chave, value) {
  return lista.find((item) => item[chave].includes(value));
}

const encontrado = encontrar(clientes, "telefone", "90945673092");

console.log(encontrado);
