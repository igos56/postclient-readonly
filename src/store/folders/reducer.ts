import { AnyAction } from "redux";
import { foldersData } from "../../fixtures/mocks";

const initialState = {
    isConfirmDeleteModalOpen: false,
    isModalOpen: false,
    isEditModalOpen: false,
    folders: [...foldersData]
};

const foldersReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'folders/updateFolders':
            return {...state, folders: action.payload};
        case 'folders/openModal':
            return {...state, isModalOpen: action.payload};
        case 'folders/closeModal':
            return {...state, isModalOpen: action.payload};
        case 'folders/openConfirmDeleteModal':
            return {...state, isConfirmDeleteModalOpen: action.payload};
        case 'folders/closeConfirmDeleteModal':
            return {...state, isConfirmDeleteModalOpen: action.payload};
        case 'folders/openEditModal':
            return {...state, isEditModalOpen: action.payload};
        case 'folders/closeEditModal':
            return {...state, isEditModalOpen: action.payload};
        default:
            return state;
    }
};

export default foldersReducer;