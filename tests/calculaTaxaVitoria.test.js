const calcularTaxaVitoria = require('../src/utils/calcularTaxaVitoria');

describe('Função calcularTaxaVitoria', () => {
  it('deve retornar 100 quando todas as partidas são vitórias', () => {
    expect(calcularTaxaVitoria(10, 10)).toBe(100);
  });

  it('deve retornar 0 quando não há vitórias', () => {
    expect(calcularTaxaVitoria(0, 10)).toBe(0);
  });

  it('deve retornar a taxa correta para valores intermediários', () => {
    expect(calcularTaxaVitoria(3, 10)).toBe(30);
    expect(calcularTaxaVitoria(7, 20)).toBe(35);
  });

  it('deve retornar 0 se o número de partidas for 0 (caso-limite)', () => {
    expect(calcularTaxaVitoria(5, 0)).toBe(0);
  });

  it('deve lançar erro se valores negativos forem passados', () => {
    expect(() => calcularTaxaVitoria(-1, 10)).toThrow();
    expect(() => calcularTaxaVitoria(5, -2)).toThrow();
  });
});