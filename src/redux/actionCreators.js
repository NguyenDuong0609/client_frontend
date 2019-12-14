import axios from 'axios';

const URL = 'http://localhost:7000/api/';

export function getCategories() {
    return dispatch => {
        axios.get(`${URL}/list-category`)
        .then(response => {
            const { error } = response.data;
            const categories = response.data;
            if (!response.data) return alert(error);
            dispatch({ type: 'SET_CATEGORIES', categories });
        });
    }
}

export function getCategoryParents() {
    return dispatch => {
        axios.get(`${URL}/list-category-parent`)
        .then(response => {
            const { error } = response.data;
            const categoryParents = response.data;
            if (!response.data) return alert(error);
            dispatch({ type: 'SET_CATEGORYPARENTS', categoryParents });
        });
    }
}

export function getPosts() {
    return dispatch => {
        //axios.get(`${URL}/list-post-follow-categoryParent`)
        axios.get(`${URL}/list-post`)
        .then(response => {
            const { error } = response.data;
            const posts = response.data;
            if (!response.data) return alert(error);
            dispatch({ type: 'SET_POSTS', posts});
        });
    }
}

export function getPostsCateParent(slugCate) {
    return dispatch => {
        //axios.get(`${URL}/list-post-follow-categoryParent`)
        axios.get(`${URL}/list-post-follow-slug-cateParent/` + slugCate)
        .then(response => {
            //const { error } = response.data;
            const postsFollowCateParent = response.data;
            //console.log( response.data);
            if (response.data != null)
                dispatch({ type: 'SET_POSTSCATEPARENT', postsFollowCateParent});
        });
    }
}

export function getPostsCategory(slugCategory) {
    return dispatch => {
        axios.get(`${URL}/list-post-follow-slug-category/` + slugCategory)
        .then(response => {
            const postFollowCategory = response.data;
            if (response.data != null)
                dispatch({ type: 'SET_POSTCATEGORY', postFollowCategory});
        });
    }
}

export function getPostDetail(slugPost) {
    return dispatch => {
        axios.get(`${URL}/post-detail-by-slug/` + slugPost)
        .then(response => {
            const postDetail = response.data;
            if (response.data != null)
                dispatch({ type: 'SET_POSTDETAIL', postDetail});
        });
    }
}

export function getPostsIdCategory(idCategory) {
    return dispatch => {
        axios.get(`${URL}/list-post-category/` + idCategory)
        .then(response => {
            const postsIdCategory = response.data;
            if (response.data != null)
                dispatch({ type: 'SET_POSTSIDCATEGORY', postsIdCategory});
        });
    }
}

export function getPostsSlider() {
    return dispatch => {
        axios.get(`${URL}list-post-of-slider`)
        .then(response => {
            const postsSlider = response;
            if (response != null)
                dispatch({ type: 'SET_POSTS_SLIDER', postsSlider});
        });
    }
}

export function getPostsSlugTag(slugTag) {
    return dispatch => {
        axios.get(`${URL}/list-post-follow-id-tag/` + slugTag)
        .then(response => {
            const postsSlugTag = response.data;
            if (response.data != null)
                dispatch({ type: 'SET_POSTSSLUGTAG', postsSlugTag});
        });
    }
}
