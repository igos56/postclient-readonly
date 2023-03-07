import { useSelector, useDispatch } from 'react-redux';
import { selectMessages } from '../../store/messages/selector';

import { updateMessagesAction } from '../../store/messages/actions';

import './styles.css';
import MessageItemDetail from '../MessageItemDetail';
import React, { useState } from 'react';
import { IMessage } from 'types/IMessage';

const MessageItem: React.FC<IMessage> = ({id, author, text, date, isSelected, isRed}) => {
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const dispatch = useDispatch();
    const messages = useSelector(selectMessages);

    const handleChecked = (id: number | undefined) => {
        const messagesArr = [...messages];
        const index = messagesArr.findIndex(item => item.id === id);
        messagesArr[index].isSelected = !messagesArr[index].isSelected;
        dispatch(updateMessagesAction(messagesArr));
    };

    const handleMessage = (id: number | undefined, e: any) => {
        const messagesArr = [...messages];
        const index = messagesArr.findIndex(message => message.id === id);

        if (e.target.type !== 'checkbox') {
            setIsDetailOpen(prev => !prev);
        }
        

        messagesArr[index].isRed = true;
        dispatch(updateMessagesAction(messagesArr));
    };
    
    return (
        <li
            className={isSelected ? 'message-item message-item_selected' : 'message-item'}
            onClick={(e) => handleMessage(id, e)}
        >
            <input className='select-checkbox' type={'checkbox'} onChange={() => handleChecked(id)} defaultChecked={isSelected}/>
            <div className='msg-author'>{author}</div>
            <div className={isRed ? 'msg-text open' : 'msg-text'}>{text}</div>
            <div className='msg-date'>{date}</div>
            {
               isDetailOpen ? messages.filter((message: IMessage) => message.id === id).map((message: IMessage) => {
                return (
                    <MessageItemDetail
                        key={message.id}
                        author={message.author}
                        text={message.text}
                        date={message.date}
                    />
                )
               }) : <></>
            }
        </li>
    );
};

export default MessageItem;