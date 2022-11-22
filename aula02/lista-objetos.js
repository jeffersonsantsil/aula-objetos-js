const cliente = {
  nome: "Jefferson",
  idade: 29,
  email: "jeffersonsantsil@gmail.com",
  telefone: ["81993263429", "81992280838"],
};

cliente.enderecos = [
  {
    rua: "Alto do resevatorio",
    numero: 50,
    apartamento: true,
    complemento: "Em frente ao abrigo dos idosos",
  },
];

cliente.enderecos.push({
  rua: "Nina moreira",
  numero: 404,
  apartamento: false,
});

const enderecosApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

console.log(enderecosApenasApartamentos);
