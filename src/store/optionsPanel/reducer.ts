import { AnyAction } from 'redux';
const initialState = {
    isSelectOpen: false
};

const optionsPanelReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'optionsPanel/openPanel':
            return {...state, isSelectOpen: action.payload};
        case 'optionsPanel/closePanel':
            return {...state, isSelectOpen: action.payload};
        default:
            return state;
    }
};

export default optionsPanelReducer;