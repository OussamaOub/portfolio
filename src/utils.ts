import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};

type CommentProps ={
    name: string,
    email: string,
    comment: string,
    date: Date,
}

const app = initializeApp(firebaseConfig);

export async function sendComment(name: string, email: string, comment: string) {
    const db = getFirestore(app);
    const comments = collection(db, "comments");
    const newComment: CommentProps = {    
        name: name,
        email: email,
        comment: comment,
        date: new Date(),
    };
    try{
        await setDoc(doc(comments), newComment);
        return true;
    }
    catch(error){
        alert("An error occurred while sending the comment. Please try again.");
        return false;
    }
}
