const cliente = {
  nome: "Fernanda",
  idade: 29,
  cpf: "11122233356",
  email: "fernanda@gmail.com",
};

console.log(
  `A cliente ${cliente.nome} de ${cliente.idade} anos tem o email ${cliente.email} e CPF ${cliente.cpf}`
);

console.log(
  `A cliente ${
    cliente.nome
  } tem os 3 primeiros digitos do CPF ${cliente.cpf.substring(0, 3)}`
);
