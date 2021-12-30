<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VehicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('vehicles')->delete();
        DB::table('vehicles')->insert([
            [
                'description' => 'auto de lujo de kawasaki',
                'name' => "kawasaki",
                'type_id' => 2,
                'motor_id' => 1,
                'num_tires' => 4,
            ],
            [
                'description' => 'auto de lujo de yamaha',
                'name' => "yamaha",
                'type_id' => 2,
                'motor_id' => 1,
                'num_tires' => 4,
            ],
            [
                'description' => 'moto de la marca italika',
                'name' => "italika",
                'type_id' => 1,
                'motor_id' => 2,
                'num_tires' => 2,
            ],
        ]);
    }
}
