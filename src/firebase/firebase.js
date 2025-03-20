import { initializeApp  } from "firebase/app";

import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup  } from "firebase/auth";

import { getFirestore ,collection, getDocs, orderBy, query} from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBLU8a_tASRaHmnKN4Ui5NI6GGVKSev_M0",
    authDomain: "final-project-aa6ac.firebaseapp.com",
    projectId: "final-project-aa6ac",
    storageBucket: "final-project-aa6ac.firebasestorage.app",
    messagingSenderId: "475401425694",
    appId: "1:475401425694:web:b2f9482002ace6a37bef0f"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

 
 
export{
    auth,getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,
    signInWithEmailAndPassword ,db,collection, getDocs, orderBy, query
}