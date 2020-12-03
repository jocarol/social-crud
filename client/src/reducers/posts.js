const ACTIONS = {
    FETCH_ALL: 'FETCH_ALL',
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
};

export default (posts = [], action) => {
    switch (action.type) {
        case ACTIONS.FETCH_ALL:
            return action.payload;
        case ACTIONS.CREATE:
            return [...posts, action.payload];
        case ACTIONS.UPDATE:
            return posts.map(post => post.id === action.payload._id ? action.payload : post);
        default:
            return posts;
    }
}