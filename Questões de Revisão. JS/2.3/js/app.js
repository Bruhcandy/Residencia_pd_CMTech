
function notas(nota) 
{
     nota = Number (prompt("Dígite sua média"))
     if (nota >= 0.0 &&  nota <=4.9) 
     {
         var notaF = "Sua nota e D";
     } 
     else if (nota >= 5.0 &&  nota <=6.9)
     {
         var notaF = "Sua nota e C";
     }
     else if (nota >= 7.0 &&  nota <=8.9)
     {
         var notaF = "Sua nota e B";
     }
     else
     {
        var notaF = "Sua nota e A"
     }
     return notaF
 }
     alert(notas());
 






