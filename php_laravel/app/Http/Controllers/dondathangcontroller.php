<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\dondathangs;

class dondathangcontroller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dh = dondathangs::all();

        return response()->json($dh);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $ddh = new dondathangs();
        $ddh->hovaten = $request['hovaten'];
        $ddh->diachi = $request['diachi'];
        $ddh->tinh = $request['tinh'];
        $ddh->quanhuyen = $request['quanhuyen'];
        $ddh->phuongxa = $request['phuongxa'];
        $ddh->sdt = $request['sdt'];
        $ddh->thongtinbosung = $request['thongtinbosung'];
        $ddh->pttt = $request['pttt'];
        $ddh->sanpham = $request['sanpham'];
        $ddh->dkdn_id = $request['dkdn_id'];
        $ddh->thanhtien = $request['thanhtien'];
        $ddh->tinhtrangdon = $request['tinhtrangdon'];
     
        $ddh->save();

        return response()->json($ddh);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $donhang = dondathangs::findOrFail($id);
            $donhang->tinhtrangdon = $request->input('tinhtrangdon');
            $donhang->save();
    
            // Optionally, perform any additional actions or updates after successful database update
    
            return response()->json(['message' => 'Data updated successfully']);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error updating data'], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
