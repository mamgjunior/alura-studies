import React from "react";
import { render, act, screen } from "@testing-library/react";
import Extrato from "../../../componentes/Extrato";

it("Deve renderizar uma lista de transações", () => {
  const transacoes = [
    {
      transacao: "Depósito",
      valor: 100,
    },
  ];

  act(() => {
    render(<Extrato transacoes={transacoes} />);
  });

  const lista = screen.getByRole("listitem");
  expect(lista).toBeInTheDocument();
});
