import {
    LOAD_NEWS,
    COUNT_PAGE_CHANGE,
    COUNT_NEWS_CHANGE,
    SORT_NEWS_CHANGE, NEWS_LOADED,
} from './actions';

export default (state, action = {}) => {
    switch (action.type) {
        case COUNT_NEWS_CHANGE:
            return {...state, paging: {...state.paging, newsPage: action.payload}};
        case COUNT_PAGE_CHANGE:
            return {...state, paging: {...state.paging, currentPage: action.payload}};
        case SORT_NEWS_CHANGE:
            return {...state, fieldSort: action.payload};
        case NEWS_LOADED:
            console.log(action);
            return {...state, news: action.payload};
        default:
            return state;
    }
};