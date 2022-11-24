const cliente = {
  nome: "Jefferson",
  idade: 29,
  email: "jeffersonsantsil@gmail.com",
  telefone: ["81993263429", "81992280838"],
};

/* cliente.enderecos = [
  {
    rua: "Alto do resevatorio",
    numero: 50,
    apartamento: true,
    complemento: "Em frente ao abrigo dos idosos",
  },
]; */

const chavesCadastradas = Object.keys(cliente);

if (!chavesCadastradas.includes("enderecos")) {
  console.error("Error. É necessário ter um endereço cadastrado");
}
