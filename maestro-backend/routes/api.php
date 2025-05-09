<?php
use App\Http\Controllers\FormationController;
use App\Http\Controllers\FormateurController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TemoignageController;
use App\Http\Controllers\ContactController;

Route::apiResource('formateurs', FormateurController::class);
Route::apiResource('temoignages', TemoignageController::class);
Route::apiResource('formations', FormationController::class);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/contact', [ContactController::class, 'sendEmail']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);