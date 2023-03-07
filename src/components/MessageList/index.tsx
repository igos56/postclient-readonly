import { useSelector } from 'react-redux';
import { selectMessages } from '../../store/messages/selector';
import { selectFolders } from '../../store/folders/selector';
import MessageItem from '../MessageItem';

import './styles.css';
import { IFolder } from 'types/IFolder';
import { IMessage } from 'types/IMessage';

const MessagesList = () => {
    const messages = useSelector(selectMessages);
    const folders = useSelector(selectFolders);

    const currentTag = folders.find((item: IFolder) => item.isSelected === true)?.folderName;
    
    const messagesToShow = messages.filter((message: IMessage ) => {
        return message.folders?.some(item => item === currentTag)
    });

    return (
        <ul className='messages-list'>
            {
                messagesToShow.map((message: IMessage) => {
                    return (
                        <MessageItem
                            id={message.id}
                            key={message.id}
                            author={message.author}
                            text={message.text}
                            date={message.date}
                            isSelected={message.isSelected}
                            isRed={message.isRed}
                        />
                    )
                })
            }
        </ul>
    );
};

export default MessagesList;