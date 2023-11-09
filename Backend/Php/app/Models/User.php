<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function role(){
        return $this->belongsTo(Role::class);
    }

    public function products(){
        return $this->hasMany(Product::class);
    }

    public function reviews(){
        return $this->hasMany(Review::class);
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }

    public function wishlist(){
        return $this->hasMany(Wishlist::class);
    }

    public function like(){
        return $this->hasMany(Like::class);
    }

    public function rate(){
        return $this->hasMany(Rate::class);
    }

    public function cart(){
        return $this->hasOne(Cart::class);
    }

    public function news(){
        return $this->hasMany(News::class);
    }
}
