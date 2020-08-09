<?php
namespace App\Http\Controllers;





use App\Answers;
use Illuminate\Support\Facades\DB;

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
        return(DB::select('select * from ttht ORDER BY RAND ( )   limit 1'));
        //dd(Answers::select("a")->limit(1)->get());
    }
    //
}
