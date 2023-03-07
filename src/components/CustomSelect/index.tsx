import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFolders } from '../../store/folders/selector';
import { selectPanelStatus } from '../../store/optionsPanel/selectors';
import { selectMessages } from '../../store/messages/selector';

import { updateMessagesAction } from '../../store/messages/actions';
import { closeOptionsPanelAction } from '../../store/optionsPanel/actions';

import { IFolder } from 'types/IFolder';

import './styles.css';

const CustomSelect = () => {

    const dispatch = useDispatch();

    const folders = useSelector(selectFolders);
    const isPanelVisible = useSelector(selectPanelStatus);
    const messages = useSelector(selectMessages);

    const handleSelect = (e: React.MouseEvent<HTMLElement>) => {
        const folderName = (e.target as any).textContent;

        const messagesArr = [...messages];
        messagesArr.forEach(message => {
            if (message?.isSelected) {
                message.folders?.splice(0, 1, folderName);
                message.isSelected = false;
            }
        });
        dispatch(updateMessagesAction(messagesArr));
        dispatch(closeOptionsPanelAction());
    };

    return (
        <div className={isPanelVisible ? 'custom-select active' : 'custom-select'}>
            {
                folders.map((folder: IFolder) => {
                    return (
                        <div
                            className='select-item'
                            key={folder?.id}
                            onClick={(e: React.MouseEvent<HTMLElement>) => handleSelect(e)}
                        >
                            {folder?.folderName}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CustomSelect;