import  { useAuth } from "../contexts/AuthContext"
import LoginForm  from '../pages/Home/components/LoginForm';
import RegisterForm  from '../pages/Home/components/RegisterForm';


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