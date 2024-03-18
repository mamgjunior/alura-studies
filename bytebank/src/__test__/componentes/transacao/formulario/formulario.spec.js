import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from "../../../../componentes/Transacao/Formulario";

// - A função act() é usada para garantir que as atualizações de estado do React sejam
// tratadas de forma síncrona durante os testes.
// - Ao usar act(), você está envolvendo a função render() e userEvent.type() em um contexto
// onde as atualizações de estado do React são tratadas corretamente durante os testes.

describe("Must render an input field", () => {
  it("In the document", () => {
    act(() => {
      render(<Formulario />);
    });

    const campoTexto = screen.getByPlaceholderText("Digite um valor");
    expect(campoTexto).toBeInTheDocument();
  });

  it("With type number", () => {
    act(() => {
      render(<Formulario />);
    });

    const campoTexto = screen.getByPlaceholderText("Digite um valor");
    expect(campoTexto).toHaveAttribute("type", "number");
  });

  it("Which can be filled", () => {
    act(() => {
      render(<Formulario />);
    });

    const campoTexto = screen.getByPlaceholderText("Digite um valor");

    act(() => {
      userEvent.type(campoTexto, "50");
    });

    expect(campoTexto).toHaveValue(50);
  });
});

it("Deve chamar um evento de onSubmit ao clicar em realizar transação", () => {
  const realizarTransacao = jest.fn();

  act(() => {
    render(<Formulario realizarTransacao={realizarTransacao} />);
  });

  const botao = screen.getByRole("button");

  act(() => {
    userEvent.click(botao);
  });

  expect(realizarTransacao).toHaveBeenCalledTimes(1);
});
