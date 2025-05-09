<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function sendEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'subject' => 'required|string',
            'message' => 'required|string',
            'name' => 'required|string'
        ]);

        $data = [
            'email' => $request->email,
            'subject' => $request->subject,
            'message' => $request->message,
            'name' => $request->name
        ];

        Mail::send('emails.contact', $data, function($message) use ($data) {
            $message->from($data['email'], $data['name']);
            $message->to('academylemaestro@gmail.com');
            $message->subject($data['subject']);
        });

        return response()->json(['message' => 'Email sent successfully']);
    }
} 