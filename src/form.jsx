import React, { useState } from 'react'

const form = () => {
    const [form,setForm]=useState(
        {
            first_name:"",
            middle_name:"",
            last_name:"",
            contact_no:"",
            address:"",
        }
    );
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setForm({...form,[name]:value})
    }
    const handleClick = ()=>{
        fetch('url',{
            method:"post",
            "content-type":"application/json",
            body:JSON.stringify(form)
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
      <input type="text" name="first_name" value={form.first_name} onChange={handleChange}></input>
      <input type="number" value={form.num} name="num"></input>
      <input type="email" value={form.email} name="email"></input>
    </div>
  )
}

export default form
