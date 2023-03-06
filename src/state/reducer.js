import { Get_Musics_SUCCESS } from "./action"

const musicReducer = (state = {musics :[]},action) => {
switch(action.type) {
    case Get_Musics_SUCCESS:
    return {...state ,musics:action.musics}
    default :
    return state
}
}

export default musicReducer