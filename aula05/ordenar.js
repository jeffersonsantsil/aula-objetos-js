const clientes = require("./clientes.json");

function ordenar(clientes, parametro) {
  const resultado = clientes.sort((a, b) => {
    if (a[parametro] < b[parametro]) {
      return -1;
    }
    if (a[parametro] > b[parametro]) {
      return 1;
    }
    return 0;
  });
  return resultado;
}

const filtradosNome = ordenar(clientes, "nome");
console.log(filtradosNome);
