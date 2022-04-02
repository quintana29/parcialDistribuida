function Actualizar(id,nombre,apellidos,email,ciudad,perfil,experiencia,refereciaPersonal,telRefereciaPersonal,refereciaLaboral,telRefereciaLaboral,adjunto){
    

         document.getElementById('nombreUsuario').value = nombre ,
         document.getElementById('apellidosUsuario').value = apellidos,
         document.getElementById('emailUsuario').value = email,
         document.getElementById('ciudadUsuario').value = ciudad,
         document.getElementById('perfilPersonalUsuario').value = perfil,
         document.getElementById('experienciaLaboralUsuario').value = experiencia,       
         document.getElementById('referenciaPersonal').value = refereciaPersonal,
         document.getElementById('telefonoReferenciaPersonal').value = telRefereciaPersonal,
         document.getElementById('referenciaLaboral').value = refereciaLaboral,
         document.getElementById('telefonoReferenciaLaboral').value = telRefereciaLaboral
         //document.getElementById('archivoAdjunto').value = adjunto;

         var boton = document.getElementById('boton');
         boton.innerHTML = 'Actualizar';

         boton.onclick = function(){
 // Set the "capital" field of the city 'DC'
             var washingtonRef = db.collection("usuario").doc(id);

             var nombre = document.getElementById('nombreUsuario').value;
             var apellidos = document.getElementById('apellidosUsuario').value;
             var email = document.getElementById('emailUsuario').value;
             var ciudad = document.getElementById('ciudadUsuario').value;
             var perfil = document.getElementById('perfilPersonalUsuario').value;
             var experiencia = document.getElementById('experienciaLaboralUsuario').value;    
             var refereciaPersonal = document.getElementById('referenciaPersonal').value;
             var telRefereciaPersonal = document.getElementById('telefonoReferenciaPersonal').value;
             var refereciaLaboral = document.getElementById('referenciaLaboral').value;
             var telRefereciaLaboral = document.getElementById('telefonoReferenciaLaboral').value;
             //var adjunto = document.getElementById('archivoAdjunto').value;
          return washingtonRef.update({

            nombre: nombre,
            apellidos: apellidos,
            email: email,
            ciudad: ciudad,
            perfil: perfil,
            experiencia: experiencia,
            refereciaPersonal: refereciaPersonal,
            telRefereciaPersonal: telRefereciaPersonal,
            refereciaLaboral: refereciaLaboral,
            telRefereciaLaboral: telRefereciaLaboral,
            //adjunto: adjunto,
        })
            .then(() => {
                alert("Se actualizo el registro");
                location.href = "/AppFirebaseHosting/pages/hojavida.html";
                boton.innerHTML = 'Actualizar';

            })
            .catch((error) => {
                // The document probably doesn't exist.
                alert("The document probably doesn't exist.");
                location.href = "/AppFirebaseHosting/pages/hojavida.html";
            });
    }

   
}