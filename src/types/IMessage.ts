export interface IMessage {
    id?: number;
    author: string;
    text: string;
    date: string;
    isSelected?: boolean;
    isRed?: boolean;
    folders?: string[];
};