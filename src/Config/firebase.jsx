
import { initializeApp } from "firebase/app";
//  import {getAuth} from 'firebase/auth'
 import {getDatabase} from 'firebase/database'
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbT3gk5euixxUoMrqVIy7wi9sUe7iTURA",
  authDomain: "native-hackathon-96b85.firebaseapp.com",
  databaseURL: "https://native-hackathon-96b85-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "native-hackathon-96b85",
  storageBucket: "native-hackathon-96b85.appspot.com",
  messagingSenderId: "777243264240",
  appId: "1:777243264240:web:f8effa008a1dead1716e35"
};







// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =getDatabase(app)
const storage=getStorage(app)

export {db,storage}