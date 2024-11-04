import axios from "axios";

export const api = axios.create({
    baseURL:"http://localhost:3334"
});

export const apiClient =(token:string) => axios.create({
    headers:{
        Authorization:`Bearer ${token}`
    },
    baseURL:"http://localhost:3334"
});