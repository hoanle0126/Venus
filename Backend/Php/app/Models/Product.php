<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function price(){
        return $this->hasOne(Price::class);
    }

    public function image(){
        return $this->hasMany(Image::class);
    }

    public function cart(){
        return $this->belongsToMany(Cart::class);
    }

    public function categories(){
        return $this->belongsToMany(Category::class,"products_categories");
    }
}
