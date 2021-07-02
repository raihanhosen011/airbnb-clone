import React from "react";
import {GoogleCircleFilled,FacebookFilled} from '@ant-design/icons'
import firebase from 'firebase/app'

import { auth } from '../firebase'

export default function login() {
  return (
    <div className="login">

      <div className="login_container">
        <div className="">
          <div className="login_title d-flex justify-content-center mb-2">
             <img src='./chatbot.png' alt='...' width='130px' />
          </div>
 
          <div className="login_info position-relative">

            <div onClick={() => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())} className="login_google single_info d-flex align-items-center mb-2">
               <GoogleCircleFilled className='fs-22'  /><h6 className='ms-2 mb-0' >Sign in with google</h6>  
            </div>

            <div onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())} className="login_facebook single_info d-flex align-items-center">
               <FacebookFilled className='fs-22' /><h6 className='ms-2 mb-0' >Sign in with facebook</h6>  
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
