<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Lectura extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Lecturas', function (Blueprint $table) {
            $table->id();
            $table->date("fecha");
            $table->string("hora",5);
            $table->integer("medidor")->unsigned();;
            $table->string("direccion");
            $table->integer("valor")->unsigned();
            $table->string("tipoMedida");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Lecturas');
    }
}
