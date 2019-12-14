import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { reducer } from './reducers';

const defaultState = {
    categories : [],
    categoryParents: [],
    posts: [],
    postsFollowCateParent: [],
    postFollowCategory: [],
    postDetail: [],
    postsIdCategory: [],
    postsSlugTag: [],
    postsSlider: []
};

export const store = createStore(reducer, applyMiddleware(thunk));