function Calcular (temp, elecion){
    if (elecion == 1){
        return "La conversion de C a F es " + (temp  * 1.8 + 32);
    }
    if (elecion == 2){
        return "La conversion de F a c es " + ((temp - 32)* 5/9);
    }
}


$(document).ready (function(){

$('.CalculoCF').click (function(){
var temp = parseFloat ($('.txt_temp').val());
var elecion = 1;
var respuesta = Calcular(temp, elecion);
$('.ResultadoTemp').html ("<h3>"+Calcular(temp, elecion)+"</h3>")
})

$('.CalculoFC').click (function(){
var temp = parseFloat ($('.txt_temp').val());
var elecion = 2
var respuesta = Calcular(temp, elecion);
$('.ResultadoTemp').html ("<h3>"+Calcular(temp, elecion)+"</h3>")
})

})