import { useSelector, useDispatch } from 'react-redux';
import { selectMessages } from '../../store/messages/selector';
import CustomSelect from '../CustomSelect';

import { openOptionsPanelAction } from '../../store/optionsPanel/actions';

import './styles.css';
import { IMessage } from 'types/IMessage';

const OptionsPanel = () => {
    const dispatch = useDispatch();

    const messages = useSelector(selectMessages);
    const isPanelVisible = messages.some((item: IMessage) => item.isSelected);

    const handleRemove = () => {
        dispatch(openOptionsPanelAction());
    };

    return (
        <div className={isPanelVisible ? 'options-panel active': 'options-panel'}>
            <div className='message-red-icon' title='Отметить прочитанными'></div>
            <div className='trash-delete-icon' title='Удалить'></div>
            <div className='folders-icon' title='Переместить в ...' onClick={handleRemove}></div>
            <CustomSelect/>
        </div>
    );
}

export default OptionsPanel;