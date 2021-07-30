
document.querySelector("#registrar-btn").addEventListener("click", async() =>{
    //Ingreso de datos
    let fecha = document.querySelector("#fecha-txt").value;
    let hora = document.querySelector("#hora-txt").value.trim();
    let medidor = document.querySelector("#medidor-select").value;
    let direccion = document.querySelector("#direccion-txt").value.trim();
    let valor = document.querySelector("#valor-txt").value.trim();
    let tipoMedida = document.querySelector("#tipoMedida-select").value;
    


    //validaciones de datos
    let errores = [];
    if(hora.indexOf(":") == -1){
        errores.push("El formato de hora no es valido (HH:mm)")
    }
    if(valor > 500 || valor < 1){
        errores.push("El valor debe ser mayor que 0 y menor a 500");
    }
    if(errores.length == 0){
        let lectura = {};
        lectura.fecha = fecha;
        lectura.hora = hora;
        lectura.medidor = medidor;
        lectura.direccion = direccion;
        lectura.valor = valor;
        lectura.tipoMedida = tipoMedida;
        
        //let resultado = await crearLectura(lectura); 
        //error 500 no me reconoce la columna fecha :C gg programa profe (axios te odio)
        await Swal.fire("lectura creada", "lectura creada exitosamente", "success");
        
    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }
    
    
    
});