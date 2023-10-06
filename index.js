// desafio do heroi. variaveis, operadores, l.repetição, estr. decisões
let nome = "Iara"
let Px = 8547
let nivel = "";


if(Px >= 8001){
    nivel = "Ascendente"

} else if (Px >= 0 && Px < 1000){
     nivel = "Ferro"

 } else if ( Px > 1001 && Px <= 2000){
      nivel = "Broze"

  } else if (Px > 2001 && Px <= 5000){
       nivel = "Prata"

   } else if (Px > 5001 && Px <= 7000){
         nivel = "Ouro"

    } else if (Px > 7001 && Px <= 8000){        
           nivel = "Platina"

     } else if (Px > 8001 && Px <= 9000){
             nivel = " Ascendente"

      } else if (Px > 9001 && Px <= 10000){
                nivel = "Imortal"

       } else if (Px > 10000){
                  nivel = "Radiante"
        }

          console.log("A heroi " + nome + "está no nivel " + nivel )