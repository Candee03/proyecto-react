//FIREBASE IMPORTS------------------------------
import { addDoc, collection, doc, getDoc, getDocs, query, where, writeBatch } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import productos from "../productos";

//FIREBASE CONFIG--------------------------------

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: "dolly-e-commerce",
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "495437987482",
    appId: "1:495437987482:web:76614807991b02fc42e923"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

//FIREBASE CONFIG--------------------------------

export const getProductsToDataBase = async () => {
    const collectionRef = collection(db, 'productos')
    let snapshotProducts = await getDocs(collectionRef)
    const documentProducts = snapshotProducts.docs
    const dataProducts = documentProducts.map((p) => ({ ...p.data(), id: p.id }))

    return dataProducts
}

export const getProductsByCategoryFromDataBase = async(category) => {
    const collectionRef = collection(db, 'productos')
    const q = query(collectionRef, where("categoria", "==", category))
    let snapshotProducts = await getDocs(q)
    const documentProducts = snapshotProducts.docs
    const dataProducts = documentProducts.map((p) => ({ ...p.data(), id: p.id }))

    return dataProducts
}

export const getSingleProductsFromDataBase = async(id) => {
    const collectionRef = collection(db, 'productos')
    const docRef = doc(collectionRef, id)
    let docSnapshot = await getDoc(docRef)
    return {...docSnapshot.data(), id: docSnapshot.id}
}

export const createOrder = async(order) => {
    const collectionRef = collection(db, 'orders')
    await addDoc(collectionRef, order);
}


export const exportData = async() => {
    const batch = writeBatch(db);
    const collectionRef = collection(db, "productos");

    for (let item of productos) {
        const newDoc = doc(collectionRef);
        batch.set(newDoc, item);
    }
    
    await batch.commit();
}