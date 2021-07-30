const gettipoMedidor = async()=>{
    let resultado = await axios.get("api/TipoMedida/get");
    return resultado.data;
}