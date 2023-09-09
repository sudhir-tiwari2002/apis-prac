
import { useEffect, useState,useRef } from 'react'
import './App.css'
import { fetchData,postData,deleteData } from './api/client'
import { getUserUrl } from './api/fetcher/user-fetcher'
import Add from './components/Add'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [userData, setUserData] = useState([] as any)
  const firstRender = useRef(true)
  const [page,setPage]=useState(1)

const getUserData = () =>{
  const params= {
    _page:page,
    _limit:4,
  }
 return fetchData(getUserUrl(),
 params
 )
  
}
const addData = () =>{
  const userData ={
    userId: uuidv4() ,
    id: uuidv4() ,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
  postData(getUserUrl(),userData).then(res => console.log(res))
}

const deleteReq = (id:any) =>{
  deleteData(`${getUserUrl()}/${id}`)
  console.log('deleted')
}
useEffect(()=>{
  // if(firstRender?.current)
  getUserData().then( res => {
    setUserData(res?.data);
  })

  // firstRender.current=false;

},[userData,addData])

  return (
    <>
      <div>
      {
        userData?.map((item:any) => (
          <div key={item?.id}>
            <p> {item?.id}</p>
            <p>{item?.title}</p>
            <Add  handleClick={() => deleteReq(item?.id)} btnText={'delete'}/>
           
          </div>
        ))
      }
      <Add  handleClick={addData} btnText={'add'}/>
      <Add handleClick={()=>setPage(page+1)} btnText={'nextpage'}/>
      <Add handleClick={()=>setPage(page-1)} btnText={'previouspage'}/>
       </div>
    </>
  )
}

export default App
