<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Product;

class ProductsController extends Controller
{
    public function index() {
      return response( Product::all()->toJson(), 200);
    }

    public function show($id) {
      return response( Product::find($id)->toJson(), 200);
    }

    public function store() {
      return response( Product::all()->toJson(), 200);
    }

    public function update($id) {
      return response( Product::all()->toJson(), 200);
    }

    public function delete($id) {
      return response( Product::all()->toJson(), 200);
    }
}
