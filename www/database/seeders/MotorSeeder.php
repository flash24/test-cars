<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class MotorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('motors')->delete();
        DB::table('motors')->insert([
            ['description' => '220 cc','capacity' => 220 ],
            ['description' => '110 cc','capacity'=> 110 ],
        ]);
    }
}
