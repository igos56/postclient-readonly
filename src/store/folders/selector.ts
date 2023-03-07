import { IFoldersList } from 'types/IFoldersList';

export const selectFolders = (state: {foldersReducer: IFoldersList}): IFoldersList["folders"] => state.foldersReducer.folders;

interface IModalOpen {
    isModalOpen: boolean;
};
export const selectModalStatus = (state: {foldersReducer: IModalOpen}) => state.foldersReducer.isModalOpen;

interface IModalConfirmStatus {
    isConfirmDeleteModalOpen: boolean;
};
export const selectConfirmModalStatus = (state: {foldersReducer: IModalConfirmStatus}) => state.foldersReducer.isConfirmDeleteModalOpen;


interface IEditModalStatus {
    isEditModalOpen: boolean;
};
export const selectEditModalStatus = (state: {foldersReducer: IEditModalStatus}) => state.foldersReducer.isEditModalOpen;