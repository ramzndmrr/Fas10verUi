import axios from "axios";

class TextileService{
    async getAllTextile(){
        return await axios.get("http://localhost:8082/api/v1/textiles").then(resp=>resp.data);
    }
}

export default TextileService;