<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

use App\Http\Controllers\FormationController;
use App\Http\Controllers\FormateurController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TemoignageController;
use App\Http\Controllers\ContactController;

Route::prefix('api')->group(function () {
    Route::apiResource('formateurs', FormateurController::class);
    Route::apiResource('temoignages', TemoignageController::class);
    Route::apiResource('formations', FormationController::class);

    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);

    Route::post('/contact', [ContactController::class, 'sendEmail']);


    Route::post('/logout', [AuthController::class, 'logout']);
});
Route::get('/csrf-token', function () {
    return response()->json(['csrfToken' => csrf_token()]);
});