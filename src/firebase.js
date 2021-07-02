import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD52kZuLqvSOf76JzNS-RwLYjcpGOE2Qsg",
    authDomain: "chatbot-dcf06.firebaseapp.com",
    projectId: "chatbot-dcf06",
    storageBucket: "chatbot-dcf06.appspot.com",
    messagingSenderId: "135065639040",
    appId: "1:135065639040:web:bf892c49180dc4c1af6e65"
}

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();