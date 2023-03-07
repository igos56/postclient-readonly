import './styles.css';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {selectFolders, selectEditModalStatus} from '../../store/folders/selector';
import { selectMessages } from '../../store/messages/selector';

import { openModalAction, openConfirmDeleteModalAction, closeEditModalAction, updateFoldersAction } from '../../store/folders/actions';
import { updateMessagesAction } from '../../store/messages/actions';

import FolderItem from '../FolderItem';
import ConfirmDeleteModal from '../ConfirmDeleteModal';
import { IFolder } from 'types/IFolder';

const FoldersList = () => {
    const [editInput, setEditInput] = useState('');

    const dispatch = useDispatch();

    const folders = useSelector(selectFolders);
    const messages = useSelector(selectMessages);
    const isEditModalVisible = useSelector(selectEditModalStatus);

    const modalHandle = () => {
        dispatch(openModalAction());
    };

    const handleDeleteModal = () => {
        const foldersArr = [...folders];
        const selectedFolder = foldersArr.find(folder => folder.isSelected);
        if (selectedFolder?.isCustom) {
            dispatch(openConfirmDeleteModalAction());
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditInput(e.target.value);
    };

    const hadleCancelBtn = () => {
        dispatch(closeEditModalAction());
        setEditInput('');
    };

    const hadleConfirmBtn = () => {
        const newFolderName = editInput;
        let oldFolderName = '';

        const foldersArr = [...folders];
        const messagesArr = [...messages];

        const targetFolder = foldersArr.find((item) => item.isSelected === true);
        if (targetFolder) {
            oldFolderName = targetFolder.folderName;
            targetFolder.folderName = newFolderName;
        }
        
        
        dispatch(updateFoldersAction(foldersArr));

        messagesArr.forEach(message => {
            if (message.folders?.includes(oldFolderName)) {
                message.folders.length = 0;
                message.folders.push(newFolderName);
            }
        });

        dispatch(updateMessagesAction(messagesArr));

        dispatch(closeEditModalAction());
        setEditInput('');
    };

    return (
        <div>
            <div className='folders-list'>
                {
                    folders.map((folder: IFolder) => {
                        return (
                            <FolderItem
                                id={folder.id}
                                key={folder.id}
                                folderName={folder.folderName}
                                isSelected={folder.isSelected}
                            />
                        )
                    })
                }
            </div>
            <div className='btn open-modal-btn' onClick={() => modalHandle()}>
                Создать папку
            </div>
            <div className='btn delete-folder-btn' onClick={() => handleDeleteModal()}>
                Удалить выбранную
            </div>
            <ConfirmDeleteModal/>
            {
               isEditModalVisible &&
                <div className={isEditModalVisible ? 'edit-modal-black active' : 'edit-modal-black'}>
                    <div className='edit-modal'>
                        <div>Вы действительно хотите переименовать папку как ...</div>
                        <input
                            className='edit-input'
                            type='text'
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                            value={editInput}
                        />
                        <div className='btn-wrapper'>
                            <button className='btn ok-btn' onClick={hadleConfirmBtn}>Переименовать</button>
                            <button className='btn cancel-btn' onClick={hadleCancelBtn}>Отмена</button>
                        </div>
                    </div>
                </div> 
            }
        </div>
    );
};

export default FoldersList;