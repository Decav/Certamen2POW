
const crearLectura = async(lectura)=>{
    console.log(lectura);
    let respuesta = await axios.post("api/Lecturas/post", lectura, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return respuesta.data;
};

const getLectura = async()=>{
    let respuesta = await axios.get("api/Lecturas/get");
    return respuesta.data;

};



const eliminarLectura = async(id)=>{
    try{
        let respuesta = await axios.post("api/Lecturas/delete", {id},{
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return respuesta.data == "ok";
    }catch(e){
        return false;
    }
    
}