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