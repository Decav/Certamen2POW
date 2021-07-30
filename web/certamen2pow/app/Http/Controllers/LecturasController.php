<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lectura;

class LecturasController extends Controller
{
    //
    public function crearLectura(Request $request){
        $input = $request->all();
        
        $lectura = new Lectura();
        $lectura->fecha = $input["fecha"];
        $lectura->hora = $input["hora"];
        $lectura->medidor = $input["medidor"];
        $lectura->direccion = $input["direccion"];
        $lectura->valor = $input["valor"];
        $lectura->tipoMedida = $input["tipoMedida"]; 
        
        //Guardar los datos
        $lectura->save();
        return $lectura;

    }
    //Obtener las lecturas registradas
    public function getLectura(){
        $lectura = Lectura::all();
        return $lectura;
    }

    public function gettipoMedidor(){
        $tipomedidor = array();
        $tipomedidor [] = "KiloWatts";
        $tipomedidor [] = "Watts";
        $tipomedidor [] = "Temperatura";

        return $tipomedidor;

    }
    
    public function filtrarMedidor(Request $request){
        $input = $request->all();
        $filtro = $input["tipoMedida"];
        $lectura = Lectura::where("tipoMedida", $filtro)->get();
        return $lectura;
    }
    
    public function eliminarLectura(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $lectura = Lectura::findOrFail($id);
        $lectura->delete();
        return "ok";
    }
}
