@extends("layouts.master")

@section("contenido")
    <div class="row mt-2">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-danger text-white">
                    <span>Medidas</span>
                </div>
                <div class="card-body">
                    <select class="form-select" id="filtro-cbx">
                        <option value="todas">Todas Las medidas</option>
                        <option value="kilowatts">Kilowatts</option>
                        <option value="watts">Watts</option>
                        <option value="temperatura">Temperatura</option>
                    </select>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-12 col-md-12 col-lg-6 mx-auto">
            <table class="table table-hover table-bordered table-striped">
                <thead class="bg-info">
                    <tr>
                        <td>Fecha</td>
                        <td>Hora</td>
                        <td>Medidor</td>
                        <td>Valor</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody id="tbody-consola">

                </tbody>
            </table>

        </div>
    </div>
@endsection

@section("javascript")
    <script src="{{asset('js/servicios/medidasService.js')}}"></script>
    <script src="{{asset('js/servicios/tipomedidorService.js')}}"></script>
    <script src="{{asset('js/medicionesExistentes.js')}}"></script>
@endsection