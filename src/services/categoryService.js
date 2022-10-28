import axios from "axios";

class CategoryService{

getCategories(){
    return axios.get(" http://localhost:8082/api/v1/categories");
}

}

export default CategoryService;