import {createSlice} from "@reduxjs/toolkit";
import {IPost} from "@/models/Post";
import {addNewPost, changePageAndFetchPosts, deletePost, fetchDetailPost, fetchPosts} from "@/store/posts/postsThunks";

export interface IPostsState {
    page: number
    limit: number
    count: number
    posts: IPost[]
    status: 'idle' | 'loading' | 'resolved' | 'rejected' | null
    error: string | null
    detail: {
        post: IPost | null
        status: 'idle' | 'loading' | 'resolved' | 'rejected' | null
        error: string | null
    }
}

const initialState: IPostsState = {
    page: 1,
    limit: 4,
    count: 0,
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
        setCount(state, action) {
            state.count = action.payload
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
    setCount
} = postsSlice.actions

export default postsSlice.reducer
