import { Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

function Todo() {
  const [text, setText] = useState("")
  const [listData, setlistData] = useState([])
  
  function handleActivity(){
    setlistData((listData)=>{
      const updatedList = [...listData,text]
      console.log(updatedList)
      return updatedList
    })
  }

  function handleDelete(i){
     const updatedListData = listData.filter((elemm,id)=>{
      return i!=id
     })
     setlistData(updatedListData)
  }

  function handleDelAll(){
    setlistData([])
  }
  return (
    <>
      <div style={{ fontFamily: 'sans', fontWeight: 'bold', padding: '50px' }}>TODO LIST
        <div>
          <input type='text' placeholder='Activity' value={text} style={{ width: '200px', marginLeft: '50px', padding: '8px' }}
            onChange={(e) => setText(e.target.value)}></input>
          <button type='button' style={{ width: '100px', backgroundColor: 'burlywood', padding: '10px', borderRadius: '8px' }} onClick={handleActivity}>Add</button></div>
          {listData!=[] && listData.map((data,i)=>{
            return(
              <>
            <li key={i}>{data}</li>
            <button type='button' style={{width:'100px',backgroundColor:'bisque',padding:'10px',borderRadius:'8px'}}onClick={()=>handleDelete(i)}>Delete</button>
            </>
            )
           
          })}
          <div style={{padding:'10px'}}>
            {listData.length>=1 &&  <button type='button' style={{width:'100px',backgroundColor:'skyblue',padding:'10px',borderRadius:'8px'}} onClick={handleDelAll}>Delete all</button>}
           
          </div>
      </div>
    </>
  )
}

export default Todo