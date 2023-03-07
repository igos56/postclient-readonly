import { IMessage } from "types/IMessage";

export const updateMessagesAction = (updatedMessages: IMessage[]) => {
    return {
        type: 'messages/updateMessages',
        payload: updatedMessages
    };
};