import { act, render, screen } from '@testing-library/react';
import App from '../paginas/Principal/App';
import Cartoes from '../componentes/Cartoes';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Rotas', () => {
  test('Deve renderizar a rota principal', () => {
    act(() => {
      render(<App />, { wrapper: BrowserRouter });
    });

    const usuario = screen.getByText('Olá, Joana :)!');
    expect(usuario).toBeInTheDocument();
  });

  test('Deve renderizar a rota Cartões', () => {
    const rota = '/cartoes';
    act(() => {
      render(
        <MemoryRouter initialEntries={[rota]}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="cartoes" element={<Cartoes />} />
            </Route>
          </Routes>
        </MemoryRouter>
      );
    });

    const meusCartoes = screen.getByText('Meus cartões');
    expect(meusCartoes).toHaveTextContent('Meus cartões');
  });
});
