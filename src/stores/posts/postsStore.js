import * as remx from 'remx';

const initialState = {
    loading: true,
    posts: [],
};

const state = remx.state(initialState);

//#####################################
// getters
//#####################################

export const getters = remx.getters({

    isLoading() {
        return state.loading;
    },

    getPosts(){
        return state.posts;
    },

});

//#####################################
// setters
//#####################################
export const setters = remx.setters({

    setPosts(posts){
      state.posts = posts;
    },

    setLoading(isLoading) {
        state.loading = isLoading;
    },

});