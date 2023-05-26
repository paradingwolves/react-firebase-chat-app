import {auth, provider} from '../config/firebase.js';
import { signInWithPopup } from "firebase/auth";

import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const Auth = () => {

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
        } catch(e) {
            console.log(e);
        }
       
    }
    

    return <div className="auth">
        <p>Sign In With Google To Continue</p>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
}