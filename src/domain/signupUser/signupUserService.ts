import { api } from "../../api/api"

interface SignUpProps {
    firstName:string;
    lastName:string;
    email:string;
    password:string;
}

export const SignUpUser = async (data:SignUpProps) => {
    const response = await api.post("/users",data );
    return response;
}