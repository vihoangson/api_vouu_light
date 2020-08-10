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
        $m = DB::select('select * from ttht ORDER BY RAND ( )   limit 1');
        dd($m);
        return();
        //dd(Answers::select("a")->limit(1)->get());
    }
    public function getData(){
        return(DB::select('select * from ttht ORDER BY RAND ( )   limit 1'));
        //dd(Answers::select("a")->limit(1)->get());
    }
    //
}
