// function calculaMedia(a, b, c){
//     let resultado = (a, b, c)/3;
//     return resultado;
// }

// function calculaExame(nota){
//     let resultado = 10 - nota;
//     return resultado;
// }

function calculaDelta (a,b, c){
    let delta = b*b - (4*a*c);
    return delta;
}

function calcularx1(a, b, delta){
    let x1 = (-1*b + Math.sqrt(delta)) /2 * a;
    return x1
}

function calcularx2(a,b, delta){
    let x2 = (-1*b - Math.sqrt(delta)) /2 *a;
    return x2
}

$('#btAqui').click(
    function(){

    calculo =
        {
         'a' :parseInt(document.getElementById('inputA').value),
         'b' :parseInt(document.getElementById('inputB').value),
         'c': parseInt(document.getElementById('inputC').value)
        }

        let Delta = calculaDelta(calculo.a, calculo.b, calculo.c);
        alert(Delta)

        // falta fzr o do x1 e x2 ( acho q precisa colocar um novo parseInt)

        // let media = calculaMedia(
        // parseInt(calculo.a),
        // parseInt(calculo.b),
        // parseInt(calculo.c)
        // );

        // let exame = calculaExame( media)


        // //  let media = (parseInt(calculo.a) + parseInt(calculo.b) + parseInt(calculo.c)) /3;
        // //  let exame = (10-media);

        //  if (media >= 7) {
        //      alert('aprovado')
        //  } else{
        //      alert('a nota que vc precisa tirar é:' +exame);
        // }
  

    }
)