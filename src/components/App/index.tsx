import React, { useState } from 'react';

import { selectModalStatus } from '../../store/folders/selector';
import { selectFolders } from '../../store/folders/selector';
import { useSelector, useDispatch } from 'react-redux';

import { updateFoldersAction, closeModalAction } from '../../store/folders/actions';

import FoldersList from '../FoldersList';
import MessagesList from '../MessageList';
import OptionsPanel from '../OptionsPanel';

import './styles.css';

const App = () => {
  const [inputModal, setInputModal] = useState('');

  const dispatch = useDispatch();

  const modalStatus = useSelector(selectModalStatus);
  const folders = useSelector(selectFolders);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputModal(e.target.value);
  }

  const handleAddFolder = () => {
    const foldersArr = [...folders];
    if (inputModal.length !== 0) {
      const newFolder = {
        id: Date.now(),
        folderName: inputModal,
        folderTag: inputModal,
        isSelected: false,
        isCustom: true
      };
      foldersArr.push(newFolder);
      dispatch(updateFoldersAction(foldersArr));
    }
    
    dispatch(closeModalAction());
    setInputModal('');
  };

  return (
    <div className="App">
      <div className='options-panel-wrapper'>
        <div className='logo'></div>
        <OptionsPanel/>
      </div>
      
      <div className='mainscreen-wrapper'>
        <FoldersList/>
        <MessagesList/>
      </div>

      <div className={modalStatus ? 'modal-filter-black active' : 'modal-filter-black'}>
        <div className='modal-create-folder'>
          <label htmlFor="name">Введите название папки:</label>
          <input type={'text'} id="name" onChange={(e) => handleInputValue(e)} value={inputModal}/>
          <button className='create-folder-btn' onClick={handleAddFolder}>Создать</button>
        </div>
      </div>

    </div>
  );
}

export default App;
