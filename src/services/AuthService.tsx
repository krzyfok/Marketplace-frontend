import api from "../api/axios";

export const loginRequest = async (username : string, password: string)=>{

    const response = await api.post("auth/login",{

        username,
        password
    })

    return response.data;
}

export const registerRequest = async (name: string, surname: string, email: string, username : string, password: string)=>
{
    const response = await api.post("auth/register",{
        name,
        surname,
        username,
        password,
        email
    })

    return response.data;
}