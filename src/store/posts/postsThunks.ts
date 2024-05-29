import {createAsyncThunk} from "@reduxjs/toolkit";
import {
    createPostService,
    deletePostService,
    editPostService,
    fetchPostByIdService,
    fetchPostsService
} from "@/services/posts.service";
import {IPost} from "@/models/Post";
import {addPost, changeDetailPost, changePage, changePost, IPostsState, setCount} from "@/store/posts/postsSlice";

export const fetchDetailPost = createAsyncThunk(
    'posts/fetchDetailPost',
    async function (id: number, {rejectWithValue}) {
        try {
            return await fetchPostByIdService(id);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue('An unknown error occurred');
            }
        }
    }
)

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async function (params: {page: number, limit: number}, {rejectWithValue, dispatch, getState}) {
        try {
            // crunch
            const {count} = (getState() as { posts: IPostsState }).posts;
            if (!count) {
                const response = await fetchPostsService(1, 999);
                dispatch(setCount(response.length))
            }
            return await fetchPostsService(params.page, params.limit);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue('An unknown error occurred');
            }
        }
    }
)

export const changePageAndFetchPosts = createAsyncThunk(
    'posts/changePageAndFetchPosts',
    async function (page: number, {dispatch, getState, rejectWithValue}) {
        try {
            const {limit} = (getState() as { posts: IPostsState }).posts;
            dispatch(changePage(page));
            return await fetchPostsService(page, limit);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue('An unknown error occurred');
            }
        }
    }
);

export const addNewPost = createAsyncThunk(
    'posts/addNewPost',
    async function (data: Pick<IPost, 'title' | 'body'>, {rejectWithValue, dispatch}) {
        try {
            const response = await createPostService(data)
            dispatch(addPost(response))
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue('An unknown error occurred');
            }
        }
    }
)

export const deletePost = createAsyncThunk(
    'posts/deletePost',
    async function (id: number, {rejectWithValue}) {
        try {
            return await deletePostService(id);
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue('An unknown error occurred');
            }
        }
    }
)

export const editPost = createAsyncThunk(
    'posts/editPost',
    async function (data: Pick<IPost, 'id' | 'title' | 'body'>, {rejectWithValue, dispatch, getState}) {
        try {
            const {posts} = (getState() as { posts: IPostsState }).posts;
            const response = await editPostService(data.id, {title: data.title, body: data.body});
            const findPost = posts.find((i) => i.id === response.id)
            if (findPost) {
                dispatch(changePost(response))
            }
            dispatch(changeDetailPost(response))
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            } else {
                return rejectWithValue('An unknown error occurred');
            }
        }
    }
)