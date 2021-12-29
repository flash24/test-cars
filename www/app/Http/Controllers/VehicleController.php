<?php

namespace App\Http\Controllers;

use App\Models\Type;
use App\Models\Motor;
use Illuminate\Http\Request;

class VehicleController extends Controller
{
    public function getTypeMotor(Request $request)
    {
        $data = Motor::all();
        return response()->json([
            'data' =>  $data
        ]);
    }
    public function getTypeVehicle(Request $request)
    {
        $data = Type::all();
        return response()->json([
            'data' =>  $data
        ]);
    }
}
