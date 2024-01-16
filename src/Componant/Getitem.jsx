import Item from "./Item"
export default function getitem({data,delethandle})
{

return<>
{data.map((items)=><Item name={items.name}
duedate={items.duedate} deletitem={delethandle}></Item>)}
</>

}