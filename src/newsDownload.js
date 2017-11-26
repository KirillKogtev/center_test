import {LOAD_NEWS, newsLoaded} from './actions';
import { takeEvery, put} from 'redux-saga/effects';
import request from 'request-lib';

const api_options = {url: 'https://relef.ru/v1/content/news/', params: {}, headers: {}};

export function* loadNews() {
    let news = [];
    news = Object.values(JSON.parse(
        (yield request.get(api_options).catch(error => console.error)).response_text
    ).response.ITEMS);
    yield put(newsLoaded(news));
}

export function* loadNewsSaga() {
    yield takeEvery(LOAD_NEWS, loadNews);
}