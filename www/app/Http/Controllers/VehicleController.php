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
    public function listVehicles()
    {
        $data = Vehicle::with('motor', 'type')->orderBy('type_id', 'desc')->get();
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
    }
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|numeric',
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'type' => 'required|numeric',
            'motor' => 'required|numeric',
            'num_tires' => 'required|numeric',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }
        try {
            $vehicle = Vehicle::find($request->id);
            $vehicle->name = $request->name;
            $vehicle->description = $request->description;
            $vehicle->type_id = $request->type;
            $vehicle->motor_id = $request->motor;
            $vehicle->num_tires = $request->num_tires;
            $vehicle->save();
            return response()->json($vehicle);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }

    }
}
