const cliente = {
  nome: "Jefferson",
  idade: 29,
  email: "jeffersonsantsil@gmail.com",
  telefone: ["81993263429", "81992280838"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente");
    } else {
      this.saldo -= valor;
      console.log(
        `Compra efetuada com sucesso, o novo saldo é de ${this.saldo}`
      );
    }
  },
};

cliente.efetuaPagamento(50);
