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

export const getPostById = async (id: number): Promise<JSONPlaceholderResponse> => {
    const response = await API<JSONPlaceholderResponse>(`/posts/${id}`);
    // console.log(response.data);
    return response.data
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

export const getPostsWithUserNames = async (page: number = 0) => {
    const [postsResponse, usersResponse] = await Promise.all([
        API<JSONPlaceholderResponse[]>('/posts', { params: { _limit: 10, _start: page * 10 } }),
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
