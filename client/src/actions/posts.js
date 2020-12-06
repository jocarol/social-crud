import * as api from '../api';

const POSTS_ACTIONS = {
    FETCH_ALL: 'FETCH_ALL',
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
}

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: POSTS_ACTIONS.FETCH_ALL, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: POSTS_ACTIONS.CREATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: POSTS_ACTIONS.UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: POSTS_ACTIONS.DELETE, payload: id });
    } catch (error) {
        console.log(error);
    }
}