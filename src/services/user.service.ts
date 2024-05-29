import axios from "axios";
import {
    IUser,
    ICredentials, IToken
} from "@/models/Auth";

export const authenticateUser  = (data: ICredentials): Promise<IToken> => {
    return new Promise<IToken>((resolve, reject) => {
        axios.post<IToken>(`${process.env.NEXT_PUBLIC_API_AUTH_SERVER}/auth`, data)
            .then((response) => {
                resolve(response.data);
            }).catch((error) => {
            reject(error);
        });
    })
}

export const createUser  = (data: IUser): Promise<IToken> => {
    return new Promise<IToken>((resolve, reject) => {
        axios.post<IToken>(`${process.env.NEXT_PUBLIC_API_AUTH_SERVER}/users`, data)
            .then((response) => {
                resolve(response.data);
            }).catch((error) => {
            reject(error);
        });
    })
}

export const getUser  = (token: string): Promise<IUser> => {
    return new Promise<IUser>((resolve, reject) => {
        axios.get<IUser>(`${process.env.NEXT_PUBLIC_API_AUTH_SERVER}/users`, {
            headers: { 'Authorization': token }
        })
            .then((response) => {
                resolve(response.data);
            }).catch((error) => {
            reject(error);
        });
    })
}