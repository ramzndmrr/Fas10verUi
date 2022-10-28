import TextileService from "../../services/textileService"

export const GET_ALL_TEXTILES="GET_ALL_TEXTILES"
const textileService = new TextileService();

export function getAllTextiles(){
    return function(dispatch){
        textileService.getAllTextile()
        .then((resp)=>resp.data)
        .then((resp)=>dispatch({
            type:"GET_ALL_TEXTILES",
            payload : resp,      
        }))
    };
}