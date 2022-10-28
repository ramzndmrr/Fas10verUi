import { GET_ALL_TEXTILES } from "../actions/textileActions";
import { textiles } from "../initialValues/textileItems"

const initialState={
    textiles:textiles
};

function textileReducer(state=initialState, {type,payload}){
    switch(type){
        case GET_ALL_TEXTILES:{
            return {
                ...state,
                textiles:payload,
            }
        }
        default:
        return state;
    }
}

export default textileReducer;