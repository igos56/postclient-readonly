export const openOptionsPanelAction = () => {
    return {
        type: 'optionsPanel/openPanel',
        payload: true
    };
};

export const closeOptionsPanelAction = () => {
    return {
        type: 'optionsPanel/closePanel',
        payload: false
    };
};