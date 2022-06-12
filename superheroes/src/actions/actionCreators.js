import ACTION_TYPES from './actionTypes'

export const cresateHeroRequestAction = values => {
  return {
    type: ACTION_TYPES.CREATE_HERO_REQUEST,
    values
  }
}
export const cresateHeroSuccessAction = values => {
  return {
    type: ACTION_TYPES.CREATE_HERO_SUCCESS,
    values
  }
}
export const cresateHeroErrorAction = error => {
  return {
    type: ACTION_TYPES.CREATE_HERO_ERROR,
    error
  }
}
export const getHeroesRequestAction = ({ limit, offset }) => {
  return {
    type: ACTION_TYPES.GET_HEROES_REQUEST,
    payload: {
      limit,
      offset
    }
  }
}
export const getHeroesSuccessAction = heroes => {
  return {
    type: ACTION_TYPES.GET_HEROES_SUCCESS,
    payload: {
      heroes
    }
  }
}
export const getHeroesErrorAction = error => {
  return {
    type: ACTION_TYPES.GET_HEROES_ERROR,
    payload: {
      error
    }
  }
}
