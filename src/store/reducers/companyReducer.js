import { GET_ALL_COMPANIES } from "../actions/companyActions";
import { companies} from "../initialValues/companyItems";

const initialState={
    companies,
};


function companyReducer(state=initialState, {type,payload}){
    switch(type){
        case GET_ALL_COMPANIES:{
            return{
                ...state,
                companies:payload,
            };
        }

        default:
      return state;
    }
}


export default companyReducer;