import { useState } from 'react'
import reactLogo from './assets/react.svg'
import deleteIcon from './assets/deleteicon.svg'          
                                          //  downlode by gollege and save in src->assets         
import edit from './assets/editIcon.svg'   
                                           





import './App.css'


function Simpletodo() {
  const [input, setinput] = useState("");
  const[list,setlist]=useState([]);
  const[update,setupdate]=useState();
  const[hidebtn,sethidebtn]=useState(false);
 

  const handelinput=(e)=>{
    setinput(e.target.value)
   
  }

  const handeltask=()=>{
    setlist([...list,input])
    setinput("")
   
  }

  const handeldelete=(i)=>{
    const filterlist=list.filter((elmt)=>{ 
      return elmt!=list[i]})
      // console.log(filterlist)
      setlist(filterlist)

    }

    const handeledit=(i)=>{
      const filterlist=list.filter((elmt)=>{ 
        return elmt===list[i]})
        setinput(filterlist[0])
        setupdate(i)
        sethidebtn(true)
       
  
      }

      const handelupdate=()=>{
        list.splice(update,1,input)
        setinput("")
        sethidebtn(false)
      }

     

  return (
    <>
      <div className="App">
        <h1>Todo List</h1>
        <div className="Container">
          <div className='input-box'>
            <input type="text" placeholder='Enter list' value={input} onChange={(e)=>{handelinput(e)} }/>
            {hidebtn? < button onClick={handelupdate}>Update List</button> : <button onClick={handeltask}>Add List</button>}

            {/* <button onClick={handeltask}>Add List</button>
            <button onClick={handelupdate}>Update List</button> */}

          </div>
          <div className='list'>
            <ul>
               {list.map((val,i)=>
               <li key={i}>{val} 
                <img className='dlt-img'    src={deleteIcon} alt='del'   onClick={()=> handeldelete(i)}  />
                <img  className="edit-img"  src={edit} alt='del'   onClick={()=> handeledit(i)} />
                </li>)}                            
                                                                   {/* warning occure in react  each list has unique key that why we set attribute key={i}*/}
            </ul> 
            </div>
        </div>
        </div>
    </>
  )
}

export default Simpletodo;
