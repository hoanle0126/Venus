<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SigninRequest;
use App\Http\Requests\SignupRequest;
use App\Mail\UserVerification;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function Signup(SignupRequest $request)
    {
        $data = $request->validated();
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        if ($user) {
            try {
                Mail::mailer('smtp')->to($user->email)->send(new UserVerification($user));

                return response()->json([
                    'status' => 200,
                    'message' => "Registered, verify your email address to login"
                ], 200);
            } catch (\Exception $th) {
                $user->delete();
                return response()->json([
                    'status' => 500,
                    'message' => "Cound not send email verification, please try again",
                    'error' => $th->getMessage()
                ], 500);
            }
        }

        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }

    public function Signin(SigninRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        }

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }

    public function Logout(Request $request)
    {
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }
}
