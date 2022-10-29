import { Context } from "react";
import { SetRoutes } from "../Actions/SharedActions";
import ContextCreater from "../ContextCreator/ContextCreater";
import { SET_ROUTES, ISharedAction, ISharedContext, ISharedState } from "../Interfaces/ISharedActions";

const initialSharedState: ISharedState = {
    apiRoutes: {},
}

const initialContextState = {
    SetRoutes: null,
    state: initialSharedState
}

export const SetRoutesReducer = (state: ISharedState, action: ISharedAction) => {
    return {
        ...state, apiRoutes: action.payload
    }
}

export function SharedReducer(state: ISharedState, action: ISharedAction): ISharedState {
    switch (action.type) {
        case SET_ROUTES:
            return SetRoutesReducer(state, action);
        default:
            return state;
    }
}

const context = ContextCreater(
    SharedReducer,
    { SetRoutes },
    initialSharedState,
    initialContextState
);

const SharedContext: Context<ISharedContext> = context.Context;
const SharedProvider = context.Provider;

export { SharedProvider, SharedContext }
