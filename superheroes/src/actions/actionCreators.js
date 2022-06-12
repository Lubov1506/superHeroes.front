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
