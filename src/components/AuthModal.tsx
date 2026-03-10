import  { useAuth } from "../contexts/AuthContext"
import LoginForm  from './LoginForm';
import RegisterForm  from './RegisterForm';


export function AuthModal() {
  const { authView } = useAuth();

  if (!authView) return null;

  return (
    <>
        {authView === "login" && <LoginForm />}
        {authView === "register" && <RegisterForm />}

     </>
  );
}