import React from "react";
import { render, screen } from "@testing-library/react";
import Cabecalho from "../../../componentes/Cabecalho";

it("Render user name logged", () => {
  render(<Cabecalho />);
  const nomeusuario = screen.getByText("Joana Fonseca Gomes");
  expect(nomeusuario).toBeInTheDocument();
});
