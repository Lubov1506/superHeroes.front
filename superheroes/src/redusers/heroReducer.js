import ACTION_TYPES from "../actions/actionTypes"

const initState = {
    heroes : [],
    error: null,
    isFetching: false
}

export const heroReducer =(state=initState, action)=>{
    switch (action.type) {
        case ACTION_TYPES.CREATE_HERO_REQUEST: {
            return{
                ...state,
                isFetching: true
            }
        }
        case ACTION_TYPES.CREATE_HERO_SUCCESS: {
            const {values} = action;
            const {heroes} = state;
            return{
                ...state,
                heroes: [...heroes, values],
                isFetching: false
            }
        }
        case ACTION_TYPES.CREATE_HERO_ERROR: {
            return{
               ...state, 
               isFetching: false,
               error: action.error
            }
        }
        case ACTION_TYPES.GET_HEROES_REQUEST: {
            return{
                ...state,
                isFetching: true
            }
        }
        case ACTION_TYPES.GET_HEROES_SUCCESS: {
            const { heroes} = state;
            const { payload: {heroes: newHeroes}} = action;
            return{
                ...state,
                isFetching: false,
                heroes: [...heroes, ...newHeroes]
            }
        }
        case ACTION_TYPES.GET_HEROES_ERROR: {
            const {payload: {error}} = action
            return{
                ...state,
                isFetching: false,
                error: error
            }
        }
        default: {
            return state;
          }
    }
}
