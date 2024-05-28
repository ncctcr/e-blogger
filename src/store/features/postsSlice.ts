import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
    createPostService,
    deletePostService,
    editPostService,
    fetchPostByIdService,
    fetchPostsService
} from "@/services/posts.service";
import {IPost} from "@/models/Post";

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
    async function (params: {page: number, limit: number}, {rejectWithValue}) {
        try {
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
            const {limit} = (getState() as { posts: PostsState }).posts;
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
            const {posts} = (getState() as { posts: PostsState }).posts;
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

interface PostsState {
    page: number
    limit: number
    posts: IPost[]
    status: 'idle' | 'loading' | 'resolved' | 'rejected' | null
    error: string | null
    detail: {
        post: IPost | null
        status: 'idle' | 'loading' | 'resolved' | 'rejected' | null
        error: string | null
    }
}

const initialState: PostsState = {
    page: 1,
    limit: 4,
    posts: [],
    status: null,
    error: null,
    detail: {
        post: null,
        status: null,
        error: null,
    },
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state, action) {
            state.posts.push(action.payload)
        },
        changePost(state, action) {
            state.posts = state.posts.map((i) => {
                if (i.id === action.payload.id) {
                    return { ...action.payload }
                }
                return i
            })
        },
        changePage(state, action) {
            state.page = action.payload
        },
        changeDetailPost(state, action) {
            state.detail.post = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDetailPost.pending, (state) => {
                state.detail.status = 'loading';
                state.detail.post = null
                state.detail.error = null;
            })
            .addCase(fetchDetailPost.fulfilled, (state, action) => {
                state.detail.status = 'resolved';
                state.detail.post = action.payload;
            })
            .addCase(fetchDetailPost.rejected, (state, action) => {
                state.detail.status = 'rejected';
                state.detail.error = action.payload as string;
            })
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
                state.posts = []
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload as string;
            })
            .addCase(addNewPost.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload as string;
            })
            .addCase(changePageAndFetchPosts.pending, (state) => {
                state.status = 'loading';
                state.posts = []
                state.error = null;
            })
            .addCase(changePageAndFetchPosts.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.posts = action.payload;
            })
            .addCase(changePageAndFetchPosts.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload as string;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.status = 'resolved';
                // trick for update current pagination
                state.posts = [];
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.detail.status = 'rejected';
                state.detail.error = action.payload as string;
            });

    },
})

export const {
    addPost,
    changePost,
    changePage,
    changeDetailPost,
} = postsSlice.actions

export default postsSlice.reducer
