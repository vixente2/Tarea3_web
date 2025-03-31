function CalcularKilosL (kilos){
    return "La conversion de K a M es " + (kilos * 2.20462);
}


$(document).ready(function(){

$('.CalcularKilos').click (function(){

var kilos = parseFloat ($('.txt_kilos').val());
var RespuestaKilos = CalcularKilosL(kilos);
$('.ResultadoLibras').html ("<h3>"+ CalcularKilosL(kilos)+"</h3>")
})

})