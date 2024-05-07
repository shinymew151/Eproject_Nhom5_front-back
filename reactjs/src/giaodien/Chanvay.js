import React, { useState, useEffect } from "react";
import '../App.css'
import Bosuutapmoi from "./Bosuutapmoi";
import {AiFillCaretDown} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'

import { Link } from "react-router-dom";

import axios from 'axios';



function Chanvay() {
  return(
<div>
  <Bosuutapmoi/>  
</div>
  );


}

export default Chanvay;