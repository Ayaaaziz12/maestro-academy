{{ ... }}
use App\Http\Controllers\TemoignageController;

Route::get('/temoignages', [TemoignageController::class, 'index']);
Route::post('/temoignages', [TemoignageController::class, 'store']);
Route::patch('/temoignages/{temoignage}/toggle-validation', [TemoignageController::class, 'toggleValidation'])->middleware('auth:sanctum');
{{ ... }}
