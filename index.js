/*
Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

*/

function ranking(wins, losses) {
	return wins - losses;
  }
  
  let win = 101;
  let loss = 34;
  let level = ranking(win, loss);
  let tier;
  const name = "Conan";
  
  switch (true) {
	case level <= 10:
	  tier = 'Ferro';
	  break;
	case level >= 11 && level <= 20:
	  tier = 'Bronze';
	  break;
	case level >= 21 && level <= 50:
	  tier = 'Prata';
	  break;
	case level >= 51 && level <= 80:
	  tier = 'Ouro';
	  break;
	case level >= 81 && level <= 90:
	  tier = 'Diamante';
	  break;
	case level >= 91 && level <= 100:
	  tier = 'Lendário';
	  break;
	default: 
	  tier = 'Imortal';
  }
  
  if (level <= 0) {
	console.log(`O Herói ${name} tem saldo ${(level)} e está no nível |${tier}|`);
  } else if (level === 1) {
	console.log(`O Herói ${name} tem saldo de ${level} vitória e está no nível |${tier}|`);
  } else {
	console.log(`O Herói ${name} tem saldo de ${level} vitórias e está no nível |${tier}|`);
  }
  