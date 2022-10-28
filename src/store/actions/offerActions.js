import OfferService from "../../services/offerService"


export const POST_ONE_OFFER="POST_ONE_OFFER";
let offerService = new OfferService();



export function add(offer){
return function (dispatch){
    offerService.addOffer(offer)
    .then((resp)=>resp.data)
    .then((resp)=>dispatch({type:POST_ONE_OFFER,payload:resp}))
}
}