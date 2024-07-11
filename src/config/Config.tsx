import { getDatabase} from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyDGA9LhgShhePto57NG6oaub_Uj73OHqyc",
  authDomain: "registrofirebase-3f748.firebaseapp.com",
  databaseURL: "https://registrofirebase-3f748-default-rtdb.firebaseio.com",
  projectId: "registrofirebase-3f748",
  storageBucket: "registrofirebase-3f748.appspot.com",
  messagingSenderId: "101195393161",
  appId: "1:101195393161:web:d3c88c69a9548a2821fe58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// export const auth = getAuth(app);
export const storage = getStorage(app);
export const auth = initializeAuth(app,{
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});