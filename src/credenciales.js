// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaZ4NsluMuzOJM3UcTxtOK6Kk6gsAxjxs",
  authDomain: "soccerone-0.firebaseapp.com",
  projectId: "soccerone-0",
  storageBucket: "soccerone-0.appspot.com",
  messagingSenderId: "620486274575",
  appId: "1:620486274575:web:59b7a89d6e54b11be6fd7a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;