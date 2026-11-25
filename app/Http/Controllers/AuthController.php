<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // 1) نتأكد إن الإيميل والباسورد اتبعتوا
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // 2) نتأكد إنهم صح
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'الإيميل أو الباسورد غلط',
            ], 401);
        }

        // 3) نعمل التوكن
        $token = Auth::user()->createToken('mobile-app')->accessToken;

        // 4) نرجّعه
        return response()->json([
            'token' => $token,
        ]);
    }
}