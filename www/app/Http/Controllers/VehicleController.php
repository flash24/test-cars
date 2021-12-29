<?php

namespace App\Http\Controllers;

use App\Models\Type;
use App\Models\Motor;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class VehicleController extends Controller
{
    public function getTypeMotor()
    {
        $data = Motor::all();
        return response()->json($data);
    }
    public function getTypeVehicle()
    {
        $data = Type::all();
        return response()->json($data);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'type' => 'required|numeric',
            'motor' => 'required|numeric',
            'num_tires' => 'required|numeric',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        $vehicle = Vehicle::create([
            'name' => $request->name,
            'description' => $request->description,
            'type_id' => $request->type,
            'motor_id' => $request->motor,
            'num_tires' => $request->num_tires,
        ]);
        return response()->json($vehicle);
        // dd($request->all());
    }
}
