function borrar(id){
    db.collection("usuario").doc(id).delete().then(() => {
        alert("Registro eliminado con exito");
         }).catch((error) => {
            alert("Ocurrio un Error", error);            
        });
}
   

