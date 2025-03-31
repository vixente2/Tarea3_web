function calcularDinero(dinero, elecion){
if (elecion == 1){
    return "De dolar a clp es: " + (dinero * 950);
}
if (elecion == 2){
    return "De clp a dolar: " + (dinero / 950);
}

}


$(document).ready (function(){
$('.CalculoDC').click(function(){
var dinero = parseFloat ($('.txt_dinero').val());
var elecion = 1;
var respuestaDinero = calcularDinero(dinero, elecion);
$('.ResultadoDinero').html ("<h3>"+calcularDinero(dinero, elecion)+"</h3>")
})

$('.CalculoCD').click(function(){
var dinero = parseFloat ($('.txt_dinero').val());
var elecion = 2;
var respuestaDinero = calcularDinero(dinero, elecion);
$('.ResultadoDinero').html ("<h3>"+calcularDinero(dinero, elecion)+"</h3>")
})

})