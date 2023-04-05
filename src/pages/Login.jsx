import { useEffect } from "react"
import { UserAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()
  const {user, googleSignIn} = UserAuth()
  const iniciar = async () => {
    try {
      await googleSignIn()
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(()=> {
    console.log(user)
    if(user) {
      navigate('/')
    }
  },[user])

  return (
    <div>
      <h1>Login con google</h1>
      <button onClick={iniciar}>Iniciar sesion</button>
    </div>
  )
}