import { useRef} from "react"
import style from "./Input.module.css"

export function Input({onclickadd}){
 const InputVAlue= useRef()
const Inputdate=useRef()
function addhandler(event){
   event.preventDefault()
  const InputVAlue1= InputVAlue.current.value
const Inputdate2= Inputdate.current.value
const arr=[...InputVAlue1]
const arr1=[...Inputdate2.toString()]

if(arr.length>0 && arr1.length>0 && isNaN(InputVAlue1)){
 
onclickadd(InputVAlue1,Inputdate2);

InputVAlue.current.value=""
  Inputdate.current.value=""
 

}
else{
  alert("please enter the valid items and date and item name must be alphabetical")
}

 }
return<>
{/* here we making form the div becouse  here i used the form to submit the data */}
 <form className={`row g-3 ,${style.mainContainer}`} action="?" onSubmit={addhandler}>
      <div className={`col ${style.Inputdiv} `}>
        <input type="text" className={`form-control ${style.input1}`} placeholder="Enter the Item" ref={InputVAlue} required/>
      </div>

      <div className={`col ${style.date}`}>
        <input type="date" className={`form-control ${style.date1}`} ref={Inputdate}/>
      </div>
      <div className={`col ${style.btm}`}>
      <button type="submit" className={`btn btn-primary $  {style.btm1}`}>Add</button>
    </div>
</form>
    </>

 }