'use client'
import React from "react"
import './NoLogin.css'
import { useRouter } from "next/navigation"

const NoLogin = () => {
    const router = useRouter()
    return(
        <div className="no-login">
            <h1 className="NoLoginTitle">Para acceder a esta sección debes iniciar sesión</h1>
            <div className="btnscontainer">
                <button onClick={ () => router.push('/login')}>Login</button>
                <button onClick={ () => router.push('/register')}>Register</button>
            </div>
        </div>
    )
}
export default NoLogin