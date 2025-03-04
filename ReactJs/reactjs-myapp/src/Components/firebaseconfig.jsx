// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtPQzHL7d--Ossukmbckwhe63RuH6wp6M",
  authDomain: "hbaservices-c7d26.firebaseapp.com",
  projectId: "hbaservices-c7d26",
  storageBucket: "hbaservices-c7d26.firebasestorage.app",
  messagingSenderId: "740233765392",
  appId: "1:740233765392:web:9a1ddbb607bbb5dedda095"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)