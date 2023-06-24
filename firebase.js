// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqMqbEdLMfPQd3fVmhr9KgIphijEHeqCI",
  authDomain: "react-chatbot-d3bc4.firebaseapp.com",
  projectId: "react-chatbot-d3bc4",
  storageBucket: "react-chatbot-d3bc4.appspot.com",
  messagingSenderId: "504037717151",
  appId: "1:504037717151:web:358c0a552732cead4f9eaa",
  measurementId: "G-3YF53QW0NE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);