const cal = document.getElementById('cal');


function inc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const res = document.getElementById('res');
    
    if(nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(2);
        res.textContent = valorIMC;

        let classificacao = ''
        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso. '
          } else if (valorIMC < 25.0){
            classificacao = 'peso adequado. Parabéns!'
          } else if (valorIMC < 30){
            classificacao = 'acima do peso. '
          }else if (valorIMC < 35){
            classificacao = 'com obesidade gral I. '
          }else if (valorIMC < 40){
            classificacao = 'com obesidade gral II. '
          }else{
            classificacao = 'com obesidade gral III. Cuidado! '
          }
        
          res.textContent = `${nome} seu IMC é ${valorIMC}, e você está ${classificacao}`
        
    } else{
        res.textContent = 'Preencha todos os campos!'
    }

}

cal.addEventListener('click', inc)