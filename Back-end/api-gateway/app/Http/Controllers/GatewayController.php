<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class GatewayController extends Controller
{

    public function forwad(Request $request, string $service, string $path = '')
    {
        //1- هات العنوان الخجمه من config <لو مش موجود رجع 404>
        $baseUrl = config("services.microservices.$service");
        if (!$baseUrl) {
            return response()->json(['message' => 'service not found'], 404);
        }
        //2- ابني الرابط الكامل
        $url = rtrim("$baseUrl/api/$service/$path", '/');
        //3- ابعت الطلب للخدمه 
        $response = Http::timeout(10)
            ->withHeaders(['Accept' => 'application/json'])
            ->withQueryParameters($request->query())
            ->send($request->method(), $url, [
                'json' => $request->isMethod('get') ? [] : $request->all(),
            ]);
        //4- رجع الرد 
        return response($response->body(), $response->status())
            ->header('Content-Type', 'application/json');
    }
}
