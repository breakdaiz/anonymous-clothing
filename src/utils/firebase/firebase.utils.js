// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjMKwXjpfmAPY4dF4iYDvP26nZ6KLObCE",
  authDomain: "anonymous-clothing.firebaseapp.com",
  projectId: "anonymous-clothing",
  storageBucket: "anonymous-clothing.appspot.com",
  messagingSenderId: "658284831014",
  appId: "1:658284831014:web:2e09b729c3222465ac61e7",
  measurementId: "G-KLP8282CST"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef  = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {

    const { displayName, email}  = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userDocRef;


 }

// const analytics = getAnalytics(app);