import React from "react";
import { act, render, screen } from "@testing-library/react";
import Saldo from "../../../../componentes/Principal/Saldo";

describe("Componente <Saldo>", () => {
  it("Deve renderizar o saldo com valor monetário", () => {
    act(() => {
      render(<Saldo saldo={1000} />);
    });

    const saldo = screen.getByTestId("saldo");
    expect(saldo).toHaveTextContent("R$ 1000");
  });
});
