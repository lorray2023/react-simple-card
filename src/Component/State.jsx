import React, { useState } from 'react'

const State = () => {

    // const data = [
    //     {
    //         name: "Alex",
    //         age: 32
    //     },
    //     {
    //         name: "Alew",
    //         age: 36
    //     }
    // ]

    // const [users, setusers] = useState(data) 

    
    // const handleChange=()=>{
    //     const updatedUsers = [...users]

    //     updatedUsers[1].name = "Ayew"
    //     updatedUsers[1].age = 23;
    //     setusers(updatedUsers)
    // }

    const [show, setShow] = useState(true)
    const handleShow = ()=>{
        setShow(!show)
    }
  return (
    <div style={{margin: "50px"}}>

       {show && <h1>Hello</h1>}

        <button onClick={handleShow}>show / hide</button>

    </div>
  )
}

export default State