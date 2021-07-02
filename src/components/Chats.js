import React,{useState,useRef,useEffect} from "react";
import { useHistory } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import { auth } from '../firebase'
import { useAuth } from '../context/AuthContext'
import axios from "axios";

import Preloader from '../components/Preloader'
import Avatar from '@material-ui/core/Avatar';

export default function Chats() {
  const [loading,setLoading] = useState(true)
  const history = useHistory()
  const { user } = useAuth()

  const handleLogOut = async () => {
     await auth.signOut()
     history.push('/')
  }

  const getFile = async (url) => {
    const response = await fetch(url)
    const data = await response.blob()

    return new File([data],'userPhoto.jpg',{ type:'image/jpeg' })
  }

  useEffect(() => {
    if(!user){
      history.push('/')
      return ;
    }
    axios.get('https://api.chatengine.io/users/me/',{
      headers : {
        "project-id" : '0648958e-2dab-4eed-b117-640b8d0ecef4',
        "user-name" : user.email,
        'user-secret' : user.uid ,
      }
    }).then(() => setLoading(false))
    .catch(() => {
      const formdata = new FormData()
      formdata.append('email',user.email)
      formdata.append('username',user.email)
      formdata.append('secret',user.uid)

      getFile(user.photoURL)
      .then((avatar) => {
         formdata.append('avatar', avatar , avatar.name)

         axios.post('https://api.chatengine.io/users',
           formdata ,
           { headers : { "private-key":'d76cda0a-451a-4d8a-80ed-9f0b590901ef' } }
         ).then(() => setLoading(false))
         .catch((error) => console.log(error))
      })
    })
  },[user,history])

  if(!user || loading) return <Preloader/>

  return (
    <>
      <div className='chats' >
         <div className='chats_nav d-flex align-items-center justify-content-between px-4 border-bottom' >
           <div className='chat_nav_logo pointer' ><img src='./chatbot.png' width='130px' /></div> 
           <div className='chat_nav_logout pointer d-flex align-items-center' >
              <Avatar src={user.photoURL} />
              <button onClick={handleLogOut} className='button ms-3 pink_gd text-white' >Logout</button>
           </div> 
         </div>   

       <ChatEngine
          height='calc(100vh - 54px)'
          projectID="0648958e-2dab-4eed-b117-640b8d0ecef4"
          userName={user.email}
          userSecret={user.uid}
       />
      </div>
    </>
  );
}
