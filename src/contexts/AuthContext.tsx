import  { createContext, useContext, useState} from 'react';
import type { ReactNode } from "react";

type AuthView = "login" | "register" | null;

interface AuthContextType {
    token: string | null;
    username: string | null;
    login: (token: string, username: string) => void;
    logout: () => void;
    authView: AuthView;
    openLogin: () => void;
    openRegister: () => void;
    closeAuth: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}:{children : ReactNode }) => {

    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [username, setUsername] = useState<string | null>(null);
    const [authView, setAuthView] = useState<AuthView>(null);

    const login = (newToken : string, username : string) =>{
        setToken(newToken);
        setUsername(username);
        localStorage.setItem('token', newToken);
        setAuthView(null);
    }
    const logout = () =>{

        setToken(null);
        localStorage.removeItem('token');
        setUsername(null);
    }
    const openLogin = () => setAuthView("login");
    const openRegister = () => setAuthView("register");
    const closeAuth = () => setAuthView(null);

    return(
        <AuthContext.Provider value ={{login, logout, token, username, authView, openLogin, openRegister, closeAuth}}>
            {children}
        </AuthContext.Provider>

    );
}

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context) throw new Error('useAuth must be used within AuthProvider');
    return context;

}