import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Admin from '../Admin'
import Agent from '../Agent'
import Merchant from '../Merchant'

function Home() {
    const [role, setRole] = useState('')
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:8081')
        .then( res => {
            if(res.data.valid){
                setRole(res.data.role);
            } else {
                navigate('/login')
            }
        })
        .catch(err => console.log(err))
    }, [])
  return (
    <div>
        <h2>Role Base Authorization</h2>
        {role === "admin" && <Admin/>}
        {role === "agent" && <Agent/>}
        {role === "merchant" && <Merchant/>}
    </div>
  )
}

export default Home