import axios from "axios";
import {IPost} from "@/models/Post";

export const fetchPostsService = (page: number, limit: number): Promise<IPost[]> => {
    return new Promise<IPost[]>((resolve, reject) => {
        axios.get<IPost[]>(`${process.env.NEXT_PUBLIC_API_URL}/posts/`, {
            params: { page, limit }
        }).then((response) => {
            resolve(response.data);
        }).catch((error) => {
            reject(error);
        });
    })
}

export const fetchPostByIdService = (id: number): Promise<IPost> => {
    return new Promise<IPost>((resolve, reject) => {
        axios.get<IPost>(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
            .then((response) => {
                resolve(response.data);
            }).catch((error) => {
            reject(error);
        });
    })
}

export const createPostService = (data: Pick<IPost, 'title' | 'body'>): Promise<IPost> => {
    return new Promise<IPost>((resolve, reject) => {
        axios.post<IPost>(`${process.env.NEXT_PUBLIC_API_URL}/posts/`, data)
            .then((response) => {
                resolve(response.data);
            }).catch((error) => {
            reject(error);
        });
    })
}

export const editPostService = (id: number, data: Pick<IPost, 'title' | 'body'>): Promise<IPost> => {
    // Here I used put because I had CORS problem, I think this is because mockapi.io doesn't allow me to use patch
    return new Promise<IPost>((resolve, reject) => {
        axios.put<IPost>(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, data)
            .then((response) => {
                resolve(response.data);
            }).catch((error) => {
            reject(error);
        });
    })
}



export const deletePostService = (id: number): Promise<{}> => {
    return new Promise<{}>((resolve, reject) => {
        axios.delete<{}>(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
            .then((response) => {
                resolve(response.data);
            }).catch((error) => {
            reject(error);
        });
    })
}