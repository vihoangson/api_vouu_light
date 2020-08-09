<?php
namespace App\Http\Controllers;

class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    public function index(){
            return response([1,2,321,231,23,12,4,1,21],200);
    }
    //
}
