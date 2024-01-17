import { useState } from "react"
import style from "./Input.module.css"

export function Input({onclickadd}){

const[inputvalue,setinputvalue]=useState("")
const[inputvalue1,setinputvalue1]=useState("")

function  inputhandler(event) {
  setinputvalue(event.target.value);
}
function  inputhandlerdate(event) {
  setinputvalue1(event.target.value);
  
}
function addhandler()
{
const arr=[...inputvalue]
const arr1=[...inputvalue1.toString()]
if(arr.length>0 && arr1.length>0){

onclickadd(inputvalue,inputvalue1);
setinputvalue("");
setinputvalue1("")
}
else
{
  alert("please enter items and date")
}

 }
return<>
 <div className={`row g-3 ,${style.mainContainer}`}>
      <div className={`col ${style.Inputdiv} `}>
        <input type="text" className={`form-control ${style.input1}`} placeholder="Enter the Item"onChange={inputhandler} value={inputvalue} required/>
      </div>

      <div className={`col ${style.date}`}>
        <input type="date" className={`form-control ${style.date1}`} onChange={inputhandlerdate} value={inputvalue1}/>
      </div>
      <div className={`col ${style.btm}`}>
      <button type="submit" className={`btn btn-primary $  {style.btm1}`} onClick={addhandler}>Add</button>
    </div>
</div>
    </>

 }