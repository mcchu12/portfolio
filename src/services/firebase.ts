import { initializeApp } from 'firebase/app';
import 'firebase/firestore';

// TODO: Add FB config
const firebaseConfig = null; 

export const fb = initializeApp(firebaseConfig);
export const fstore = fb.firestore();
