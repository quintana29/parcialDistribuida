//function to sport pdf doc
function pdfexport(id,nombre,apellidos,email,ciudad,perfil,experiencia,refereciaPersonal,telRefereciaPersonal,refereciaLaboral,telRefereciaLaboral){
//Variables

    var title = "Hoja de Vida";
    var Nombre= document.getElementById('nombre').innerText;
    var Apellidos= document.getElementById('apellido').innerText;
    var Email= document.getElementById('email').innerText;
    var Ciudad= document.getElementById('ciudad').innerText;
    var Perfil= document.getElementById('perfil').innerText;
    var Experiencia= document.getElementById('experiencia').innerText;
    var RefenciaPer= document.getElementById('refenciaPer').innerText;
    var TelRePer= document.getElementById('telRePer').innerText;
    var RefLab= document.getElementById('refLab').innerText;
    var TelReLa= document.getElementById('telReLa').innerText;

    var doc = new jsPDF();
    //report
    doc.setFontSize(22)
    doc.text(title, 20, 10);
    //doc.line(10,10,180,10);
    //doc.fromHTML($('#body').get(0),15,15);


    doc.setFontSize(22);
    doc.text("Identificacion" + ' ' + id, 10, 20);
    doc.setFontSize(22)
    doc.text(Nombre + ': ' + nombre,10, 30);
    doc.setFontStyle('normal');
    doc.text(Apellidos + ': ' + apellidos, 10, 40);
    doc.setFontStyle('normal');
    doc.text(Email + ': ' + email, 10, 50);
    doc.setFontStyle('normal');
    doc.text(Ciudad + ': ' + ciudad, 10, 60);
    doc.setFontStyle('normal');
    doc.text(Perfil + ': ' + perfil, 10, 70);
    doc.setFontStyle('normal');
    doc.text(Experiencia + ': ' + experiencia, 10, 80);
    doc.setFontStyle('normal');
    doc.text(RefenciaPer + ': ' + refereciaPersonal, 10, 90);  
    doc.setFontStyle('normal');
    doc.text(TelRePer + ': ' + telRefereciaPersonal, 10, 100);
    doc.setFontStyle('normal');
    doc.text(RefLab + ': ' + refereciaLaboral, 10, 110);
    doc.setFontStyle('normal');
    doc.text(TelReLa + ': ' + telRefereciaLaboral, 10, 120);
    
    doc.save("hojaVida.pdf");
    

}