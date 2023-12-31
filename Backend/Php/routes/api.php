<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\VerifyController;
use App\Http\Resources\UserResource;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post("/signup", [AuthController::class, "signup"]);
Route::post("/signin", [AuthController::class, "signin"]);
Route::get("/email/verify/{id}",[VerifyController::class,"verify"])->name("verification.verify");
Route::get("/categories",[CategoryController::class,"index"]);
Route::get("/products",[ProductController::class,"index"]);
Route::apiResource("/users", UserController::class);


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get("/user", function (Request $request) {
        return $request->user();
    });
});