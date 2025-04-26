<?
namespace App\Http\Controllers;

use App\Models\Formation;
use Illuminate\Http\Request;

class FormationController extends Controller
{
    public function index()
    {
        return Formation::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'titre' => 'required|string',
            'description' => 'required|string',
            'niveau' => 'required|string',
            'modalite' => 'required|string',
            'duree' => 'required|string',
        ]);

        return Formation::create($validated);
    }

    public function show($id)
    {
        return Formation::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $formation = Formation::findOrFail($id);
        $formation->update($request->all());
        return $formation;
    }

    public function destroy($id)
    {
        $formation = Formation::findOrFail($id);
        $formation->delete();
        return response()->json(['message' => 'Formation supprimée']);
    }
}
