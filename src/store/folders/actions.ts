import { IFolder } from "types/IFolder";

export const updateFoldersAction = (updatedFolders: IFolder[]) => {
    return {
        type: 'folders/updateFolders',
        payload: updatedFolders
    };
};

export const openModalAction = () => {
    return {
        type: 'folders/openModal',
        payload: true
    };
};

export const closeModalAction = () => {
    return {
        type: 'folders/closeModal',
        payload: false
    };
};

export const openConfirmDeleteModalAction = () => {
    return {
        type: 'folders/openConfirmDeleteModal',
        payload: true
    };
};

export const closeConfirmDeleteModalAction = () => {
    return {
        type: 'folders/closeConfirmDeleteModal',
        payload: false
    };
};

export const openEditModalAction = () => {
    return {
        type: 'folders/openEditModal',
        payload: true
    };
};

export const closeEditModalAction = () => {
    return {
        type: 'folders/closeEditModal',
        payload: false
    };
};