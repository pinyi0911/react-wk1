// import { getApps, getApp, initializeApp } from "firebase/app";
// import {  getFirestore,
//     collection,
//     doc,
//     setDoc,
//     getDoc,
//     getDocs,
//     deleteDoc,
//     query,
//     where, } from "firebase/firestore";
// import imgs from "../json/imgs.json";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
//     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_FIREBASE_APPID,
//   };

// const app_length = getApps().length > 0;

// // Initialize Firebase
// const app = app_length ? getApp() : initializeApp(firebaseConfig);

// // REFERENCE DB
// const db = getFirestore(app);

// // REFERENCE COLLECTION
// const imgsCollection = collection(db, "imgs"); 

// export const feedImgs = async () => {
//   // DELETE ALL EXISTING DOCS
//   const querySnapshot = await getDocs(imgsCollection);
//   querySnapshot.forEach(async (img) => {
//     await deleteDoc(doc(db, "imgs", img.id));
//   });
//   // ADD NEW DOCS
//   imgs.forEach(async (img) => {
//     const docRef = await doc(imgsCollection);
//     await setDoc(docRef, { ...img, id: docRef.id });
//   });
// };

import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc,setDoc,doc } from "firebase/firestore";
import imgs from "../json/imgs.json";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};

const app_length = getApps().length > 0;

// Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const imgsCollection = collection(db, "imgs"); 

export const feedImgs = async () => {
  // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(imgsCollection);
  querySnapshot.forEach(async (img) => {
    await deleteDoc(doc(db, "imgs", img.id));
  });
  // ADD NEW DOCS
 imgs.forEach(async (img) => {
    const docRef = await doc(imgsCollection);
    await setDoc(docRef, { ...img, id: docRef.id});
  });
};