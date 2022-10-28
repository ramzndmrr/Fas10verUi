import axios from "axios";

class CompanyService{

    async getCompanies(){
        const url = "http://localhost:8082/api/v1/companies";
       return await axios.get(url).then(resp=>resp.data);
    }
}

export default CompanyService;