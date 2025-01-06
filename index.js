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
  
