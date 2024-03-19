import { calculaNovoSaldo } from "../../utils";

describe("Quando eu realizo uma transação", () => {
  it("Que é um depósito, o saldo deve aumentar", () => {
    const transacao = { transacao: "Depósito", valor: 50 };
    const novoSaldo = calculaNovoSaldo(transacao, 100);
    expect(novoSaldo).toBe(150);
  });

  it("Que é um transferência, o saldo deve diminuir", () => {
    const transacao = { transacao: "Transferência", valor: 50 };
    const novoSaldo = calculaNovoSaldo(transacao, 100);
    expect(novoSaldo).toBe(50);
  });
});

it("Deve retornar o valor do saldo atualizado com o rendimento", () => {
  const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);
  const saldo = 100;
  const novosaldo = calculaRendimento(saldo);
  expect(novosaldo).toBe(100.5);
  expect(calculaRendimento).toHaveBeenCalled();
  expect(calculaRendimento).toHaveBeenCalledWith(saldo);
});
