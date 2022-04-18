
function operacion(){
    var Vin=parseFloat(document.MyForm.Vin.value);
    var Vf=parseFloat(document.MyForm.Vf.value);
    var ADCR=parseFloat(document.MyForm.ADCR.value);
    var LSB=Vf/(Math.pow(2, ADCR));
    var Vdecimal=Vin/LSB;
    resul=document.getElementById("Vdecimal");
    resul.innerHTML=Vdecimal;
}