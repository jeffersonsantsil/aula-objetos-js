const cliente = {
  nome: "Fernanda",
  idade: 29,
  cpf: "11122233356",
  email: "fernanda@gmail.com",
};

console.log(
  `A cliente ${cliente["nome"]} de ${cliente["idade"]} anos tem o email ${cliente["email"]} e CPF ${cliente["cpf"]}`
);

const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
});
