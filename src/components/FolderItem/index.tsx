import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectFolders } from '../../store/folders/selector';

import { updateFoldersAction } from '../../store/folders/actions';
import { openEditModalAction } from '../../store/folders/actions';

import './styles.css';

import { IFolder } from 'types/IFolder';

const FolderItem: React.FC<IFolder> = ({id, folderName, isSelected}) => {

    const dispatch = useDispatch();

    const folders = useSelector(selectFolders);
    

    const selectFolderHandle = (id: string | number) => {
        const foldersArr = [...folders];
        const index = foldersArr.findIndex(item => item.id === id);
        foldersArr.forEach(item => item.isSelected = false);
        foldersArr[index].isSelected = true;
        dispatch(updateFoldersAction(foldersArr));
    };

    const handleEditButton = () => {
        const foldersArr = [...folders];
        const selectedFolder = foldersArr.find(folder => folder.isSelected);
        if (selectedFolder?.isCustom) {
            dispatch(openEditModalAction());
        }
    };

    return (
        <div
            className={isSelected ? 'folder-item-wrapper folder-item-wrapper_selected' : 'folder-item-wrapper'}
            onClick={() => selectFolderHandle(id)}
        >
            <div className='folder-item'>
                {folderName}
            </div>
            <div
                className='edit-button'
                onClick={handleEditButton}
                title='Переименовать'
            ></div>
        </div>
        
    );
};

export default FolderItem;