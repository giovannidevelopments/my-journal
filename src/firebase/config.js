
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAcYnzvQwU4Ooy2Q_fs_lO1RhKeIL6Q3U0",
    authDomain: "react-course-f4d11.firebaseapp.com",
    projectId: "react-course-f4d11",
    storageBucket: "react-course-f4d11.appspot.com",
    messagingSenderId: "226385515290",
    appId: "1:226385515290:web:171b03913ebe005c2792a3"
};


export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
