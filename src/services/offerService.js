import axios from "axios";

class OfferService{ 

    async addOffer(offer){
        const url ="http://localhost:8082/api/v1/offers";
        return await axios.post(url, offer).then(resp=>resp.data);
    }
}

export default OfferService;