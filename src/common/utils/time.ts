export function tempoParaSegundos(tempo: string) {
  const [horas = "0", minutos = "0", segundos = "0"] = tempo.split(":");
  const quantidadeSegundoEmUmHora = 3600;
  const horasEmSegundos = Number(horas) * quantidadeSegundoEmUmHora;
  const quantidadeSegundoEmUmMinuto = 60;
  const minutosEmSegundos = Number(minutos) * quantidadeSegundoEmUmMinuto;
  return horasEmSegundos + minutosEmSegundos + Number(segundos);
}