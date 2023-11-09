<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function wishlist(){
        return $this->belongsToMany(Wishlist::class);
    }

    public function cost(){
        return $this->hasOne(Cost::class);
    }

    public function image(){
        return $this->hasMany(Image::class);
    }

    public function cart(){
        return $this->hasMany(Cart::class);
    }

    public function review(){
        return $this->hasMany(Review::class);
    }

    public function rate(){
        return $this->hasMany(Rate::class);
    }
}
