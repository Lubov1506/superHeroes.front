import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import {createHeroSaga, getHeroesSaga} from './heroSaga'

function* rootSaga () {
    yield takeLatest(ACTION_TYPES.CREATE_HERO_REQUEST, createHeroSaga)
    yield takeLatest(ACTION_TYPES.GET_HEROES_REQUEST, getHeroesSaga)
}

export default rootSaga