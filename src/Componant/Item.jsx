import style from "./Item.module.css"
function Item({name,duedate,deletitem}){
return<>
<div   className={style.container}>
<div key={name} className={style.name}>{name}</div>
<div key={duedate} className={style.date}>{duedate}</div>
<button className={style.btm} onClick={()=>deletitem(name)}>Delet</button>
</div>
</>

}
export default Item