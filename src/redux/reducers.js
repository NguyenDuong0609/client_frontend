import { combineReducers } from 'redux';

function categoryParents(state = [], action) {
    if (action.type === 'SET_CATEGORYPARENTS') {
        return action.categoryParents;
    }
    return state;
}

function posts(state = [], action) {
    if (action.type === 'SET_POSTS') {
        return action.posts;
    }
    return state;
}

function postsFollowCateParent(state = [], action) {
    if (action.type === 'SET_POSTSCATEPARENT') {
        return action.postsFollowCateParent;
    }
    return state;
}

function postFollowCategory(state = [], action) {
    if (action.type === 'SET_POSTCATEGORY') {
        return action.postFollowCategory;
    }
    return state;
}

function postDetail(state = [], action) {
    if (action.type === 'SET_POSTDETAIL') {
        return action.postDetail;
    }
    return state;
}

function postsIdCategory(state = [], action) {
    if (action.type === 'SET_POSTSIDCATEGORY') {
        return action.postsIdCategory;
    }
    return state;
}

function postsSlugTag(state = [], action) {
    if (action.type === 'SET_POSTSSLUGTAG') {
        return action.postsSlugTag;
    }
    return state;
}

function postsSlider(state = [], action) {
    if (action.type === 'SET_POSTS_SLIDER') {
        return action.postsSlider;
    }
    return state;
}

function categories(state = [], action) {
    if (action.type === 'SET_CATEGORIES') {
        return action.categories;
    }
    return state;
}

export const reducer = combineReducers({
    categories: categories,
    categoryParents: categoryParents,
    posts: posts,
    postsFollowCateParent: postsFollowCateParent,
    postFollowCategory: postFollowCategory,
    postDetail: postDetail,
    postsIdCategory: postsIdCategory,
    postsSlugTag: postsSlugTag,
    postsSlider: postsSlider
});