import api from '../../services/api';
import { buscaTransacoes } from '../../services/transacoes';

jest.mock('../../services/api');

const mockTransacao = [
  {
    id: 1,
    transacao: 'Depósito',
    valor: '100',
    data: '19/03/2024',
    mes: 'Março',
  },
];

const mockRequisicao = (retorno) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: retorno,
      });
    }, 200);
  });
};

describe('Requisição para API', () => {
  test('Deve retornar uma lista de transações', async () => {
    api.get.mockImplementation(() => mockRequisicao(mockTransacao));

    const transacoes = await buscaTransacoes();
    expect(transacoes).toEqual(mockTransacao);
    expect(api.get).toHaveBeenCalledWith('/transacoes');
  });
});
