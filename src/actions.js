export const LOAD_NEWS = 'LOAD_NEWS';
export const COUNT_PAGE_CHANGE = 'COUNT_PAGE_NEWS_CHANGE';
export const COUNT_NEWS_CHANGE = 'COUNT_NEWS_CHANGE';
export const SORT_NEWS_CHANGE = 'SORT_NEWS_CHANGE';
export const NEWS_LOADED = 'NEWS_LOADED';

export const loadNews = (paging) => ({
    type: LOAD_NEWS,
    payload: paging,
});

export const countPageChange = (count) => ({
    type: COUNT_PAGE_CHANGE,
    payload: count,
});

export const countNewsChange = (count) => ({
    type: COUNT_NEWS_CHANGE,
    payload: count,
});
export const sortNewsChange = (field) => ({
    type: SORT_NEWS_CHANGE,
    payload: field,
});

export const newsLoaded = (news) => ({
    type: NEWS_LOADED,
    payload: news,
});