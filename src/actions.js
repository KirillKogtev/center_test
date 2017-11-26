export const LOAD_NEWS = 'LOAD_NEWS';
export const COUNT_PAGE_CHANGE = 'COUNT_PAGE_NEWS_CHANGE';
export const COUNT_NEWS_CHANGE = 'COUNT_NEWS_CHANGE';
export const SORT_NEWS_CHANGE = 'SORT_NEWS_CHANGE';
export const NEWS_LOADED = 'NEWS_LOADED';

export const loadNews = (val) => ({
    type: LOAD_NEWS,
    payload: val,
});

export const countPageChange = (val) => ({
    type: COUNT_PAGE_CHANGE,
    payload: val,
});

export const countNewsChange = (val) => ({
    type: COUNT_NEWS_CHANGE,
    payload: val,
});
export const sortNewsChange = (val) => ({
    type: SORT_NEWS_CHANGE,
    payload: val,
});

export const newsLoaded = (news, allPages) => ({
    type: NEWS_LOADED,
    payload: {news, allPages},
});