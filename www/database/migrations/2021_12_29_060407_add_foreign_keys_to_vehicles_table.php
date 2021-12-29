<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToVehiclesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('vehicles', function (Blueprint $table) {
            $table->foreign(['type_id'], 'FK_vehicles_types')->references(['id'])->on('types')->onUpdate('CASCADE');
            $table->foreign(['motor_id'], 'FK_vehicles_motors')->references(['id'])->on('motors')->onUpdate('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('vehicles', function (Blueprint $table) {
            $table->dropForeign('FK_vehicles_types');
            $table->dropForeign('FK_vehicles_motors');
        });
    }
}
