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

for (let chave in cliente) {
  let tipo = typeof cliente[chave];
  if (tipo !== "object" && tipo !== "function") {
    console.log(`O campo ${chave} tem o valor ${cliente[chave]}`);
  }
}
