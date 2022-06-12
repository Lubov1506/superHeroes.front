import * as API from '../api'
import { put } from 'redux-saga/effects'
import * as ActCreators from '../actions/actionCreators'

export function * createHeroSaga (action) {
  try {
    const {
      data: {
        data: { hero }
      }
    } = yield API.createHero(action.values)
    yield put(ActCreators.cresateHeroSuccessAction({hero}))
  } catch (error) {
      yield put(ActCreators.cresateHeroErrorAction(error))
  }
}
export function* getHeroesSaga (action) {
  try{
    const {
      data: {
        data:  heroes 
      }
    } = yield API.getHeroes(action.payload)
    yield put(ActCreators.getHeroesSuccessAction(heroes))
  }catch(error){
    yield put(ActCreators.getHeroesErrorAction(error))
  }
}
