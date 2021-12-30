<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('types')->delete();
        DB::table('types')->insert([
            ['description' => 'Motocicleta'],
            ['description' => 'Auto (sedan)'],
        ]);
    }
}
