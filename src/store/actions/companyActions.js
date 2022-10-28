import CompanyService from "../../services/companyService";

export const GET_ALL_COMPANIES="GET_ALL_COMPANIES";

const companyService = new CompanyService();

export function getAllCompanies(){
    return function(dispatch){
        companyService.getCompanies()
        .then((resp)=>resp.data)
        .then((resp)=>dispatch({
            type:"GET_ALL_COMPANIES",
            payload:resp,
        }))
    };
}