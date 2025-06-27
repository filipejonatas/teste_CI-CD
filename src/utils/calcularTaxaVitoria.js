function calcularTaxaVitoria(vitorias, partidas) {
  if (vitorias < 0 || partidas < 0) throw new Error('Valores não podem ser negativos');
  if (partidas === 0) return 0;
  return Math.round((vitorias / partidas) * 100);
}

module.exports = calcularTaxaVitoria;