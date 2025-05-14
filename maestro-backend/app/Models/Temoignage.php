<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Temoignage extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'email',
        'contenu',
        'rating',
        'formation',
        'photo',
        'is_validated'
    ];
}
