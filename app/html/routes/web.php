<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Route::group(['prefix' => 'api'], function() {

  /**
   * @api {get} /api/products  Paginated list of products.
   * @apiName GetProducts
   * @apiGroup Product
   */
  Route::get('/products', ['uses' => 'ProductsController@index']);

  /**
   * @api {get} /api/product/:id  Get one Product details.
   * @apiName GetProduct
   * @apiGroup Product
   * @apiParam {Number} id Product unique ID.
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "id": "1",
   *       "name": "exampleProductName",
   *       "description": "Example Product Description",
   *       "price": 1.000
   *       "created": "2017-02-28 07:38:40"
   *     }
   */
  Route::get('/product/{id}', ['uses' => 'ProductsController@show']);

  /**
   * @api {post} /api/products  Create a new product.
   * @apiName CreateProduct
   * @apiGroup Product
   */
  Route::post('/products', ['uses' => 'ProductsController@store']);

  /**
   * @api {put} /api/products/:id  Update a product.
   * @apiName UpdateProduct
   * @apiGroup Product
   * @apiParam {Number} id Product unique ID.
   */
  Route::put('/products/{id}', ['uses' => 'ProductsController@update']);

  /**
   * @api {delete} /api/products/:id Delete an a product.
   * @apiName DeleteProduct
   * @apiGroup Product
   * @apiParam {Number} id Product unique ID.
   */
  Route::delete('/products/:id', ['uses' => 'ProductsController@delete']);
});
