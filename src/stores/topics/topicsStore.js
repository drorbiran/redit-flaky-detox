import * as remx from 'remx';

const initialState = {
    loading: true,
    topics: [],
};

const state = remx.state(initialState);

//#####################################
// getters
//#####################################

export const getters = remx.getters({

    isLoading() {
        return state.loading;
    },

    getTopics(){
        return state.topics;
    },

});

//#####################################
// setters
//#####################################
export const setters = remx.setters({

    setTopics(topics){
      state.topics = topics;
    },

    setLoading(isLoading) {
        state.loading = isLoading;
    },

});