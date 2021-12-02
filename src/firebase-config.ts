import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyABwzHQ4U4DcOgCmi5f-S8OR1oWHH_Kqqs",
  authDomain: "authreact-a1585.firebaseapp.com",
  projectId: "authreact-a1585",
  storageBucket: "authreact-a1585.appspot.com",
  messagingSenderId: "620818031405",
  appId: "1:620818031405:web:af0c388eee182a4e3d29a4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
