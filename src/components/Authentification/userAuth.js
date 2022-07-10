import {createContext, useContext, useEffect , useState } from 'react';
import{auth} from '../../firebase-config';

const userAuth = createContext({
    currentUser:null,
})
export const useAuth = ()=> useContext(userAuth)

export default function userAuthProvider({children}){

    const[currentUser,setCurrentUser] = useState(null)

    const value = {currentUser,
    }
    return<userAuth.Provider value={value}>{children}</userAuth.Provider>

}

