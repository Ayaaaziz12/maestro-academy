<?php

namespace App\Http\Controllers;

use App\Models\Temoignage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TemoignageController extends Controller
{
    public function index()
    {
        $temoignages = Temoignage::where('is_validated', true)
            ->latest()
            ->get();

        return response()->json([
            'success' => true,
            'temoignages' => $temoignages
        ]);
    }

    public function store(Request $request)
    {
        \Log::info('Received testimonial request:', $request->all());

        // Validate request
        $validator = Validator::make($request->all(), [
            'nom' => 'required|string|max:255',
            'email' => 'nullable|email|max:255',
            'contenu' => 'required|string|min:10',
            'rating' => 'required|integer|min:1|max:5',
        ], [
            'nom.required' => 'Le nom est requis',
            'email.email' => 'Veuillez entrer une adresse email valide',
            'contenu.required' => 'Le témoignage est requis',
            'contenu.min' => 'Le témoignage doit contenir au moins :min caractères',
            'rating.required' => 'La note est requise',
            'rating.min' => 'La note doit être entre 1 et 5',
            'rating.max' => 'La note doit être entre 1 et 5',
        ]);

        if ($validator->fails()) {
            \Log::error('Validation failed:', $validator->errors()->toArray());
            return response()->json([
                'success' => false,
                'message' => 'Erreur de validation',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $temoignage = Temoignage::create([
                'nom' => $request->nom,
                'email' => $request->email,
                'contenu' => $request->contenu,
                'rating' => $request->rating,
                'is_validated' => false
            ]);

            \Log::info('Testimonial created successfully:', $temoignage->toArray());

            return response()->json([
                'success' => true,
                'message' => 'Témoignage enregistré avec succès',
                'temoignage' => $temoignage
            ], 201);

        } catch (\Exception $e) {
            \Log::error('Error creating testimonial:', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return response()->json([
                'success' => false,
                'message' => 'Une erreur est survenue lors de l\'enregistrement du témoignage',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}