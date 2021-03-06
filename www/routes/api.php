<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\VehicleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/userinfo', function (Request $request) {
        return $request->user();
    });
    Route::prefix('vehicle/cat')->group(function () {
        Route::get('motors', [VehicleController::class, 'getTypeMotor']);
        Route::get('types', [VehicleController::class, 'getTypeVehicle']);
    });
    Route::post('vehicle', [VehicleController::class, 'store']);
    Route::get('vehicles', [VehicleController::class, 'listVehicles']);
    Route::put('vehicle', [VehicleController::class, 'update']);
    Route::delete('vehicle', [VehicleController::class, 'delete']);
});
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
