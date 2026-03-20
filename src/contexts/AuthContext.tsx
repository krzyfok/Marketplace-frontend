import  { createContext, useContext, useEffect, useState} from 'react';
import type { ReactNode } from "react";
import toast from "react-hot-toast";

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
    isLoading: boolean;
  
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}:{children : ReactNode }) => {

    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [username, setUsername] = useState<string | null>(null);
    const [authView, setAuthView] = useState<AuthView>(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
        const storedToken = localStorage.getItem("token");
        const storedUsername = localStorage.getItem("username");

        if(storedToken && storedUsername)
        {
            setUsername(storedUsername);
            setToken(storedToken);
        }
        setIsLoading(false);
    }, []);
    const login = (newToken : string, username : string) =>{
        setToken(newToken);
        setUsername(username);
        localStorage.setItem('token', newToken);
        localStorage.setItem('username',username);
        setAuthView(null);
        toast.success("Logged in Successfully");
    }
    const logout = () =>{

        setToken(null);
        localStorage.removeItem('token');
        setUsername(null);
        toast.success("Logged out Successfully");
    }
    const openLogin = () => setAuthView("login");
    const openRegister = () => setAuthView("register");
    const closeAuth = () => setAuthView(null);

    return(
        <AuthContext.Provider value ={{login, logout, token, username, authView, openLogin, openRegister, closeAuth, isLoading}}>
            {children}
        </AuthContext.Provider>

    );
}

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context) throw new Error('useAuth must be used within AuthProvider');
    return context;

}