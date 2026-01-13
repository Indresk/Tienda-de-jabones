// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGqArOMhPSGnEyZFyf14EHbWWB6QyYRsc",
  authDomain: "tienda-de-jabones.firebaseapp.com",
  projectId: "tienda-de-jabones",
  storageBucket: "tienda-de-jabones.firebasestorage.app",
  messagingSenderId: "1097174301108",
  appId: "1:1097174301108:web:22f010f83b20c2cbf2dae1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app)

export async function addFireData(newData) {
    try {
        const docRef = []
        newData.forEach(async item => {
            let itemSended = await addDoc(collection(db, "products-test03"),
                item
            )
            docRef.push(itemSended)
        });
        console.log("Document written with ID: ", docRef);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

export async function getFireData() {
    try {
        const dataToDeliver = []
        const dataQuery = await getDocs(collection(db, "products-test03"))
        dataQuery.forEach((e)=>dataToDeliver.push({...e.data(),id:e.id}))
        return dataToDeliver;
        
    } catch (error) {
        console.error("Error requesting document: ", error);
    }
}