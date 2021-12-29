<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class VehicleController extends Controller
{
    public function getTypeMotor(Request $request)
    {
        return response()->json([
            'token_type' => 'Bearer'
        ]);
    }
}
