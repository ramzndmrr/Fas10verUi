import axios from "axios";

class BusinessService{
    getBusiness(){
      return  axios.get("http://localhost:8082/api/v1/businesses");
    }

    getOneBusiness(id){
      return  axios.get(`http://localhost:8082/api/v1/businesses/${id}`);
    }
}

export default BusinessService;