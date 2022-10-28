import companyReducer from "./reducers/companyReducer";
import textileReducer from "./reducers/textileReducer";
import offerReducer from "./reducers/offerReducer";
import { combineReducers } from "redux";
import { offers } from "./initialValues/offerItems";

const rootReducer = combineReducers({
    company:companyReducer,
    textile:textileReducer,
    offer:offerReducer
});

export default rootReducer;