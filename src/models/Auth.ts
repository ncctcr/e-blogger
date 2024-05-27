export interface IUser {
    name: string
    email: string
    password: string
}

export interface ICredentials {
    email: string;
    password: string;
}


export interface IToken {
    token: string;
    message?: string
}

