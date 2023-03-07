interface ISelectOpen {
    isSelectOpen: boolean;
};

export const selectPanelStatus = (state: {optionsPanelReducer: ISelectOpen}) => state.optionsPanelReducer.isSelectOpen;