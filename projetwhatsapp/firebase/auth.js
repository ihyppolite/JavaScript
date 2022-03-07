import { getAuth,createUserWithEmailAndPassword  } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

/**
 * Permete de créeer un compte sur Firepase
 * @paramm {{email:string, password: string, username: string}} registration
 */

export const register = async (registration) => {
    const auth = getAuth();
    const db = getFirestore();

    // 1. On créé le nouveau compte dans firebase (auth nous renvoi le UID )
    const result = await createUserWithEmailAndPassword(
        auth, 
        registration.email, 
        registration.password) ;

    const uid = result.user.uid;

    // 2. On stock les données supplémentaires dans firestore (avec pour référence le UID)

    const ref = doc(db, 'users', uid);

    await setDoc(ref, {
        username: registration.username,
        avatar: "http://placehold.it/32x32",
        
    })
};