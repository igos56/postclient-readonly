import React from 'react';
import { IMessage } from 'types/IMessage';

import './styles.css';

const MessageItemDetail: React.FC<IMessage> = ({author, text, date}) => {
    return (
        <div className='message-detail-wrapper'>
            <div className='message-detail-info'>
                <div className='author'>{author}</div>
                <div className='close-icon'></div>
            </div>
            <div className='text'>{text}</div>
            <div className='date'>{date}</div>
        </div>
    );
};

export default MessageItemDetail;