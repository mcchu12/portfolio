import { initializeApp } from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCMlRaT3TjSU-V6YM_VLTrcTxqkPGWDtIs",
  authDomain: "portfolio-e6d75.firebaseapp.com",
  databaseURL: "https://portfolio-e6d75.firebaseio.com",
  projectId: "portfolio-e6d75",
  storageBucket: "portfolio-e6d75.appspot.com",
  messagingSenderId: "231133540566",
  appId: "1:231133540566:web:d6ab69dc932f4c723b5977",
  measurementId: "G-GBJ9S59TXE"
}

export const fb = initializeApp(firebaseConfig);
export const fstore = fb.firestore();