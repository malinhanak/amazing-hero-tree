import { useReducer } from "react";

export const actionsTyped = {
    OPEN: "OPEN",
    CLOSE: "CLOSE",
    CLOSE_ALL: "CLOSE_ALL",
};

export const useAccordion = () => {
    const reducer = (state, action) => {
        const folderId = action.payload;
        switch (action.type) {
            case actionsTyped.OPEN:
                return { ...state, [folderId]: true };
            case actionsTyped.CLOSE:
                return { ...state, [folderId]: false };
            case actionsTyped.CLOSE_ALL:
                return {};
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, {});

    const open = (folderId) =>
        dispatch({ type: actionsTyped.OPEN, payload: folderId });
    const close = (folderId) =>
        dispatch({ type: actionsTyped.CLOSE, payload: folderId });
    const closeAll = () => dispatch({ type: actionsTyped.CLOSE_ALL });

    return [state, { open, close, closeAll }];
};
