

const cargarTabla = (lecturas) =>{
    let tbody = document.querySelector("#tbody-Lectura");
    tbody.innerHTML = "";
    for(let i=0; i < lecturas.length; ++i){
        let tr = document.createElement("tr");
        let tdFecha = document.createElement("td");
        tdFecha.innerText = lecturas[i].fecha;
        let tdHora = document.createElement("td");
        tdHora.innerText = lecturas[i].hora;
        let tdMedidor = document.createElement("td");
        tdMedidor.innerText = lecturas[i].medidor;
        let tdDireccion = document.createElement("td");
        tdDireccion.innerText = lecturas[i].direccion;
        let tdValor = document.createElement("td");
        tdValor.innerText = lecturas[i].valor;
        let tdTipoMedida = document.createElement("td");
        tdTipoMedida.innerText = lecturas[i].tipoMedida;
        let tdAcciones = document.createElement("td");
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Descartar Lectura";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idLectura = lecturas[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);

        //Rellenar tabla con los valores recopilados
        tr.appendChild(tdFecha);
        tr.appendChild(tdHora);
        tr.appendChild(tdMedidor);
        tr.appendChild(tdDireccion);
        tr.appendChild(tdValor);
        tr.appendChild(tdTipoMedida);
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);
    }
}

document.querySelector("#filtro-cbx").addEventListener("change", async()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let medidor = await gettipoMedidor(filtro);
    cargarTabla(medidor);
})

//Eliminar una de las lecturas "supuestamente registradas"(error 500)
const iniciarEliminacion = async function(){
    let id = this.idLectura;
    let resp = await Swal.fire({title:"Esta seguro?",text:"Esta operacion es irreversible"
    , icon:"error",showCancelButton:true});
    if(resp.isConfirmed){
        Swal.fire("La persona quiere eliminar");
        if(await eliminarLectura(id)){
            let Lecturas = await getLectura();
            cargarTabla(Lecturas);
            Swal.fire("Lectura eliminada", "Lectura eliminada exitosamente", "info");
        }else{
            Swal.fire("Error", "No se pudo atender la solicitud", "error");
        }
    }else{
        Swal.fire("Cancelado", "Cancelado a peticion del usuario", "info");
    }
}


const cargartipoMedida = async ()=>{
    let filtroCbx = document.querySelector("#filtro-cbx");
    let tipomedida = await gettipoMedidor();
    
    tipomedida.forEach(m => {
        let option = document.createElement("option");
        option.innerText = m;
        option.value = m;
        filtroCbx.appendChild(option);

    });
};
document.addEventListener("DOMContentLoaded" ,()=>{
    cargartipoMedida();
});
