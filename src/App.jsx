 import './App.css'
 import Heading from './Componant/Heading'
 import { Input } from './Componant/Input'
 import Getitem from './Componant/Getitem'
import { useState } from 'react'
import Error from './Componant/Error'

function App() {
const[showdata, setdata]=useState([])
  function datahandler(item,date)
{
  //  const newdata=[...showdata,{name:item,duedate:date}]
setdata((curretValue)=>[...curretValue,{name:item,duedate:date}]);

  }
  function delet_handle(Name){
   // alert(name)
const data=[...showdata]
// console.log(data
let newdata=data.filter((item)=>item.name!==Name)
setdata(newdata);

  }
  return<>
  <div className='container'>
       <center>
        <Heading></Heading>
        <Input onclickadd={datahandler}></Input>
{showdata.length==0 &&<Error></Error>}
        <Getitem data={showdata} delethandle={delet_handle}></Getitem>
       </center>
       </div>
    </>
  
}

export default App
