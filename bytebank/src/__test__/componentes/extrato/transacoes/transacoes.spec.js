import React from "react";
import { act, render, screen } from "@testing-library/react";
import Transacoes from "../../../../componentes/Extrato/Transacoes";
import estilos from "../../../../componentes/Extrato/Extrato.module.css";

it("Deve renderizar o mesmo componente com props atualizadas", () => {
  const transacao = {
    transacao: "Depósito",
    valor: 100,
  };

  let { rerender } = render(
    <Transacoes transacao={transacao} estilos={estilos} />,
  );

  const tipoTransacao = screen.getByTestId("tipoTransacao");
  const valorTransacao = screen.getByTestId("valorTransacao");

  expect(tipoTransacao).toHaveTextContent("Depósito");
  expect(valorTransacao).toHaveTextContent("R$ 100");

  const novaTransacao = {
    transacao: "Transferência",
    valor: 50,
  };

  act(() => {
    rerender(<Transacoes transacao={novaTransacao} estilos={estilos} />);
  });

  const novoTipoTransacao = screen.getByTestId("tipoTransacao");
  const novoValorTransacao = screen.getByTestId("valorTransacao");

  expect(novoTipoTransacao).toHaveTextContent("Transferência");
  expect(novoValorTransacao).toHaveTextContent("- R$ 50");
});
