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

function ligarPara(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

ligarPara(cliente.telefone[0], cliente.telefone[1]);

ligarPara(...cliente.telefone);

// O metódo de espalahamento também pode ser usado em objetos
/* const encomenda = {
  destinatario: cliente.nome,
  endereco: cliente.enderecos,
}; */
const encomenda = {
  destinatario: cliente.nome,
  ...cliente.enderecos[0],
};

console.log(encomenda);
