import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './Feature.css';
const Feature = () => {
 
let[products,setProducts]=useState([])

useEffect(()=>{
Axios.get("https://jsonplaceholder.typicode.com/users")
   .then((res)=>{
    setProducts(res.data)
    .catch(()=>{})
   })
},[])

 return <>
    <table className='dm-table'>
      <thead className='dm-head'>
       <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
       </tr>
      </thead>
      <tbody className='dm-body'>
      {
        products.map((product)=>{
          return <tr>
           <td>{product.id}</td>
           <td>{product.name}</td>
           <td>{product.email}</td>
           <td>{product.phone}</td>
          </tr>
        })
      }
      </tbody>
    
    </table>
 </>
}

export default Feature