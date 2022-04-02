
function Guardar(){

    db.collection("usuario").add({
        nombre: document.getElementById("nombreUsuario").value,
        apellidos: document.getElementById("apellidosUsuario").value,
        email: document.getElementById("emailUsuario").value,
        ciudad: document.getElementById("ciudadUsuario").value,
        perfil: document.getElementById("perfilPersonalUsuario").value,
        experiencia: document.getElementById("experienciaLaboralUsuario").value,
        //habilidadesColaborativas: document.getElementById("habilidadesColaborativasUsuario").value,
        //habilidadesTecnicas: document.getElementById("habilidadesTecnicasUsuario").value,
        refereciaPersonal: document.getElementById("referenciaPersonal").value,
        telRefereciaPersonal: document.getElementById("telefonoReferenciaPersonal").value,
        refereciaLaboral: document.getElementById("referenciaLaboral").value,
        telRefereciaLaboral: document.getElementById("telefonoReferenciaLaboral").value,

    })
    .then((docRef) => {
        alert("Registro Exitoso");
        location.href="/AppFirebaseHosting/pages/hojavida.html";
               
    })
    .catch((error) => {
        
        alert("Ocurrio un Error", error);
        location.href="/AppFirebaseHosting/index.html";
    });

     
}