import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCqueZXLVvXg3eViX65YNxFqSeo8HBDpVg",
  authDomain: "zdfronpol13-sdanews.firebaseapp.com",
  projectId: "zdfronpol13-sdanews",
  storageBucket: "zdfronpol13-sdanews.appspot.com",
  messagingSenderId: "428862381731",
  appId: "1:428862381731:web:4deebb2f27a66fbbd46916",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
