import {COUNT_NEWS_CHANGE, COUNT_PAGE_CHANGE, LOAD_NEWS, newsLoaded, SORT_NEWS_CHANGE} from './actions';
import { takeEvery, put, select} from 'redux-saga/effects';
import request from 'request-lib';
import {sortName, sortDate} from './sortData';
import {sortFieldsSelection} from "./sortFieldsSelection";

const api_options = {url: 'https://relef.ru/v1/content/news/', params: {}, headers: {}};

export function* loadNews() {
    let news = [];
    let {selectPage, countNewsOnPage} = yield select((state) => state.paging);
    let fieldSort = yield select((state) => state.fieldSort);
    news = Object.values(JSON.parse(
        (yield request.get(api_options).catch(error => console.error)).response_text
    ).response.ITEMS);
    if (fieldSort === sortFieldsSelection.DATE) {
        news.sort(sortDate);
    } else {
        news.sort(sortName);
    }
    let pageNews = news.slice((selectPage - 1) * countNewsOnPage, selectPage * countNewsOnPage);
    yield put(newsLoaded(pageNews, Math.ceil(news.length / countNewsOnPage)));
}

export function* newsDownload() {
    yield takeEvery(LOAD_NEWS, loadNews);
    yield takeEvery(COUNT_PAGE_CHANGE, loadNews);
    yield takeEvery(COUNT_NEWS_CHANGE, loadNews);
    yield takeEvery(SORT_NEWS_CHANGE, loadNews);
}