import axios from "axios";
import { JSONPlaceholderResponse } from "./post/post.interface";
import { UsersInterface } from "./user/user.interface";
import { UserResponse } from "./user/userRespose.interface";
import { CommentInterface } from "./user/comment.interface";

export const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});


export const getPost = async () => {
    const response = await API<JSONPlaceholderResponse[]>(
        `/posts`,
        {
            params: {
                _limit: 10,
                _start: 0,
            }
        }
    )
    // console.log(response.data);
    return response.data
}

export const getPostById = async (id: number): Promise<JSONPlaceholderResponse> => {
    const response = await API<JSONPlaceholderResponse>(`/posts/${id}`);
    // console.log(response.data);
    return response.data
};

export const getUserPost = async (id: number): Promise<UserResponse> => {
    const response = await API<UsersInterface>(`/users/${id}`);
    // console.log(response.data);
    return {
        userName: response.data.name,
    };
}

export const getCommentsByPost = async (id: number): Promise<CommentInterface[]> => {
    const response = await API<CommentInterface[]>(`/posts/${id}/comments`,
        {
            params: {
                _limit: 10,
                _start: 0,
            }
        }
    );
    // console.log(response.data);
    return response.data;
}
