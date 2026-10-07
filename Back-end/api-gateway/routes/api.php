<?php

use App\Http\Controllers\GatewayController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::middleware('auth-sanctum')->group(function () {
    Route::any('{service}/{path}', [GatewayController::class, 'forwad'])->where('path', '.*');
});