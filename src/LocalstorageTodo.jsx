import React from 'react'
import { useState ,useEffect} from 'react'
import deleteIcon from './assets/deleteicon.svg'  
import editIcon from './assets/editIcon.svg' 

//to get data from local storage


const getlocaldata=()=>{
  let list= localStorage.getItem('key')
  // console.log(list)
if(list)
{
  return JSON.parse(localStorage.getItem('key'))
}
else {
  return [];
}

}



function LocalstorageTodo() {

    const [input, setinput] = useState("");
  const[list,setlist]=useState(getlocaldata());                  // insted of empty arrya we call this function in this fuction we have list of arrya from local storage otherwise empty arrya
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
    const filterlist=list.filter((elmt)=>
      {return elmt!==list[i]})
      // console.log(filterlist)
      setlist(filterlist)

    }

    const handeledit=(i)=>{
      const filterlist=list.filter((elmt)=>{ 
        return elmt===list[i]})
        // console.log(filterlist)
        setinput(filterlist[0])
        setupdate(i)
        sethidebtn(true)
       
  
      }

      const handelupdate=()=>{
        list.splice(update,1,input)
        setinput("")
        sethidebtn(false)
      }


      useEffect(()=>{
        localStorage.setItem('key',JSON.stringify(list))

      },[setlist,handeldelete,handelupdate])



     

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
                <img  className="edit-img"  src={editIcon} alt='del'   onClick={()=> handeledit(i)} />
                </li>)}                            
                                                                   {/* warning occure in react  each list has unique key that why we set attribute key={i}*/}
            </ul> 
            </div>
        </div>
        </div>
    </>
  )
}
  


export default LocalstorageTodo