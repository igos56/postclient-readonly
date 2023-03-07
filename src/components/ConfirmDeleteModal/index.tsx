import { useSelector, useDispatch } from 'react-redux';
import { selectConfirmModalStatus } from '../../store/folders/selector';
import { selectFolders } from '../../store/folders/selector';
import { selectMessages } from '../../store/messages/selector';

import { closeConfirmDeleteModalAction } from '../../store/folders/actions';
import { updateFoldersAction } from '../../store/folders/actions';
import { updateMessagesAction } from '../../store/messages/actions';

import './styles.css';

const ConfirmDeleteModal = () => {
    const dispatch = useDispatch();

    const isConfirmModalOpen = useSelector(selectConfirmModalStatus);
    const folders = useSelector(selectFolders);
    const messages = useSelector(selectMessages);

    const handleConfirmDelete = () => {
        const foldersArr = [...folders];
        const messagesArr = [...messages];

        const folderName = foldersArr.find(item => item.isSelected)?.folderName;
        
        messagesArr.forEach(message => {
            if (message.folders?.some((item: string) => item === folderName)) {
                message.folders?.splice(0, 1, 'Удаленные');
            }
        });

        dispatch(updateMessagesAction(messagesArr));

        const index = foldersArr.findIndex(item => item.isSelected);
        foldersArr.splice(index, 1);    
        dispatch(updateFoldersAction(foldersArr));
        dispatch(closeConfirmDeleteModalAction());


    };

    const hanldeCancelDelete = () => {
        dispatch(closeConfirmDeleteModalAction());
    };

    return (
        <div className={isConfirmModalOpen ? 'confirm-modal-black active' : 'confirm-modal-black'}>
            <div className='confirm-delete-modal'>
                <div>Вы действительно хотите удалить выделенную папку? Если в ней хранятся письма - они будут перемещены в папку <b>Удаленные</b></div>
                <div className='btn-wrapper'>
                    <button className='btn ok-btn' onClick={handleConfirmDelete}>Удалить</button>
                    <button className='btn cancel-btn' onClick={hanldeCancelDelete}>Отмена</button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDeleteModal;