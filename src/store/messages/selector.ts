import { IMessagesList } from "types/IMessagesList";

export const selectMessages = (state: {messagesReducer: IMessagesList}): IMessagesList["messages"] => state.messagesReducer.messages;