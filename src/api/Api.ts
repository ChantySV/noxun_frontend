import axios from "axios";
import { JSONPlaceholderResponse } from "./post/post.interface";
import { UsersInterface } from "./user/user.interface";
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

export const getPostById = async (id: number): Promise<JSONPlaceholderResponse & { userName?: string }> => {
    const [postResponse, usersResponse] = await Promise.all([
        API<JSONPlaceholderResponse>(`/posts/${id}`),
        API<UsersInterface[]>('/users')
    ]);

    const user = usersResponse.data.find(u => u.id === postResponse.data.userId);
    return {
        ...postResponse.data,
        userName: user ? user.name : 'Desconocido'
    };
};

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

export const getPostsWithUserNames = async () => {
    const [postsResponse, usersResponse] = await Promise.all([
        API<JSONPlaceholderResponse[]>('/posts'),
        API<UsersInterface[]>('/users')
    ]);

    const userMap = new Map<number, string>();
    usersResponse.data.forEach(user => {
        userMap.set(user.id, user.name);
    });

    const postsWithUserNames = postsResponse.data.map(post => ({
        ...post,
        userName: userMap.get(post.userId) || 'Desconocido'
    }));
    return postsWithUserNames;
}
