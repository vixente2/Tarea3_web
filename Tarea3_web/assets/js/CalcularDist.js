function CalcularD (dist, elecion){
    if (elecion == 1){
        return "La conversion de K a M es " + (dist * 0.621371);
    }
    if (elecion == 2){
        return "La conversion de M a K es " + (dist * 1.60934);
    }
}


$(document).ready (function(){

$('.CalculoKM').click (function(){
var dist = parseFloat ($('.txt_dist').val());
var elecion = 1;
var respuestaD = CalcularD(dist, elecion);
$('.ResultadoDist').html ("<h3>"+CalcularD(dist, elecion)+"</h3>")
})

$('.CalculoMK').click (function(){
    var dist = parseFloat ($('.txt_dist').val());
    var elecion = 2;
    var respuestaD = CalcularD(dist, elecion);
    $('.ResultadoDist').html ("<h3>"+CalcularD(dist, elecion)+"</h3>")
})

})