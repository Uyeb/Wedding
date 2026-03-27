import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = { 
  apiKey : "AIzaSyCnZRqxCUPy4B-ulhTcwfShIrU3B-K4WDA" , 
  authDomain : "wedding-site-29396.firebaseapp.com" , 
  databaseURL : "https://wedding-site-29396-default-rtdb.asia-southeast1.firebasedatabase.app" , 
  projectId : "wedding-site-29396" , 
  storageBucket : "wedding-site-29396.firebasestorage.app" , 
  messagingSenderId : "712465130616" , 
  appId : "1:712465130616:web:f87b9b3ee6e6a616ca798d" , 
  measurementId : "G-WDECR4RMSN" 
};

const app = initializeApp(firebaseConfig);
// Xuất biến db để các file khác có thể dùng để gửi dữ liệu
export const db = getDatabase(app);