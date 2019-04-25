const validarCpf = (cpf) => {
  let soma = 0, resto, reps = 9, numDigitos = 10;
  if (cpf.length != 11 || cpf=="00000000000") return false;

  for(let i = 0; i < 2; i++) {
    
    for (let i = 0; i < reps; i++) {
      soma += parseInt(cpf.charAt(i)) * (numDigitos - i)
    }

    resto = (soma*10) % 11
    resto = (resto == 10 || resto == 11) ? 0 : resto
  
    if(resto != parseInt(cpf.charAt(reps)))
      return false

    soma = 0
    reps++
    numDigitos++
  }
  return true;
}