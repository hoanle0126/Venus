<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class VerifyController extends Controller
{
    public function verify($user_id,Request $request){
        if(!$request->hasValidSignature()){
            return response()->json([
                "msg"=>"Invalid/Expired url provided"
            ],401);
        }
        $user = User::findOrFail( $user_id );

        if(!$user->hasVerifiedEmail()){
            $user->markEmailAsVerified();
        }
        else {
            return response()->json([
                "status" => 400,
                "message" => "Email already verified"
            ],400);
        }
        $url = "http://localhost:1902";
        return Redirect::intended($url);
    }
}
