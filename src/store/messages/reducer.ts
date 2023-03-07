import { AnyAction } from 'redux';
import { messagesData } from "../../fixtures/mocks";

const initialState = {
    messages: [...messagesData]
};

const messagesReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'messages/updateMessages':
            return {...state, messages: action.payload}
        default:
            return state;
    }
};

export default messagesReducer;