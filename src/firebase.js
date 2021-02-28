import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'
import '@firebase/storage'

//firebase initialisation
const firebaseConfig = {
    apiKey: "AIzaSyApl9CazvrD6JrC8TJUEv8d0Abtt6-lBVo",
    authDomain: "empirefurniturecity.firebaseapp.com",
    projectId: "empirefurniturecity",
    storageBucket: "empirefurniturecity.appspot.com",
    messagingSenderId: "200793614435",
    appId: "1:200793614435:web:bbf344f0c44e68a393f056",
    measurementId: "G-6GJHJ8X89H"
  };

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

// collection references
const usersCollection = db.collection('users')

// export utils/refs
export {
    db,
    auth,
    storage,
    usersCollection,
}