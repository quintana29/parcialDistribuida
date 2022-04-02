function leer() {
    var table = document.getElementById("tabla")
    db.collection("usuario").onSnapshot((querySnapshot) => {
        table.innerHTML = '';
        querySnapshot.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            table.innerHTML += `
            <tr>
                  <th scope="row">${doc.id}</th>
                  <td>${doc.data().nombre}</td>
                  <td>${doc.data().apellidos}</td>
                  <td>${doc.data().email}</td>
                  <td>${doc.data().ciudad}</td>
                  <td>${doc.data().perfil}</td>
                  <td>${doc.data().experiencia}</td>
                  <td>${doc.data().refereciaPersonal}</td>  
                  <td>${doc.data().telRefereciaPersonal}</td>
                  <td>${doc.data().refereciaLaboral}</td>
                  <td>${doc.data().telRefereciaLaboral}</td>                 

                  <td><button class="btn btn-danger" onclick="borrar('${doc.id}')">Borrar</button></td> 
                   
                  <td><button class="btn btn-primary" onclick="Actualizar('${doc.id}','${doc.data().nombre}','${doc.data().apellidos}',
                    '${doc.data().email}', '${doc.data().ciudad}','${doc.data().perfil}', '${doc.data().experiencia}',
                    '${doc.data().refereciaPersonal}','${doc.data().telRefereciaPersonal}','${doc.data().refereciaLaboral}',
                    '${doc.data().telRefereciaLaboral}'
                    )">Actualizar</button></td> 
                    
                    <td><button class="btn btn-primary" onclick="pdfexport('${doc.id}','${doc.data().nombre}','${doc.data().apellidos}',
                    '${doc.data().email}', '${doc.data().ciudad}','${doc.data().perfil}', '${doc.data().experiencia}',
                    '${doc.data().refereciaPersonal}','${doc.data().telRefereciaPersonal}','${doc.data().refereciaLaboral}',
                    '${doc.data().telRefereciaLaboral}'
                    )">Reporte</button></td>



            </tr>`

        });
    });
    
}
