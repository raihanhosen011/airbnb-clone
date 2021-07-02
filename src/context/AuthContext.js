import React,{ useContext,useState,useEffect,createContext } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
  const [loading,setLoading] = useState(true)
  const [user,setUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    auth.onAuthStateChanged((data) => {
        setUser(data)
        setLoading(false)
        if(user)history.push('/chats')
    })
  },[user,history])

  const value = { user }

  return (
    <AuthContext.Provider value={value} >
        {!loading && children}
    </AuthContext.Provider>  
  )
}
export {AuthProvider}