import { createStore, combineReducers } from "redux";
import messagesReducer from "./messages/reducer";
import foldersReducer from "./folders/reducer";
import optionsPanelReducer from "./optionsPanel/reducer";

const rootReducer = combineReducers({messagesReducer, foldersReducer, optionsPanelReducer});

const store = createStore(rootReducer);

export default store;