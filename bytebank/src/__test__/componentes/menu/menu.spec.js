import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "../../../componentes/Menu";

it("Search one link for initial page", () => {
  render(<Menu />);
  const linkPaginaInicial = screen.getByText("Inicial");
  expect(linkPaginaInicial).toBeInTheDocument();
});

it("Render link list", () => {
  render(<Menu />);
  const listLink = screen.getAllByRole("link");
  expect(listLink).toHaveLength(4);
});

it("don't render link for extrato", () => {
  render(<Menu />);
  const linkExtrato = screen.queryByText("Extrato");
  expect(linkExtrato).not.toBeInTheDocument();
});
