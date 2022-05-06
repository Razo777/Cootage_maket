import { useState } from "react";

export const useToggle =(intialState=true)=>{
const [toggle,setToggle]=useState(intialState)
const hide =()=>setToggle(prev=>!prev)

return [toggle,hide]
}

