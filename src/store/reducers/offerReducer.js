import { POST_ONE_OFFER } from "../actions/offerActions";
import { offers } from "../initialValues/offerItems";

const initialState ={
    offers:offers,
}

export function offerReducer(state=initialState,{type,payload}){
    switch (type) {
        case POST_ONE_OFFER:
            return {...state,offers:[...state.offers, payload]}
        default:
            return{...state};
    }
}

export default offerReducer;