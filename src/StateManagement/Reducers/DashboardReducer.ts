import { Context } from "react";
import { initialSummaryState } from "../../Screens/Dashboard/Store/initialSummaryState";
import { SetAvailableCountries, SetSummary } from "../Actions/DashboardActions";
import ContextCreater from "../ContextCreator/ContextCreater";
import { IDashboardAction, IDashboardContext, IDashboardState, SET_AVAILABLE_COUNTRIES, SET_SUMMARY } from "../Interfaces/IDashboardActions";

const initialDashboardState: IDashboardState = {
    summary: initialSummaryState,
    availableCountries: []
}

const initialContextState = {
    SetSummary: null,
    SetAvailableCountries: null,
    state: initialDashboardState
}

export const SetSummaryReducer = (state: IDashboardState, action: IDashboardAction) => {
    return {
        ...state, summary: action.payload
    }
}

export const SetAvailableCountriesReducer = (state: IDashboardState, action: IDashboardAction) => {
    return {
        ...state, availableCountries: action.payload
    }
}


export function DashboardReducer(state: IDashboardState, action: IDashboardAction): IDashboardState {
    switch (action.type) {
        case SET_SUMMARY:
            return SetSummaryReducer(state, action);
        case SET_AVAILABLE_COUNTRIES:
            return SetAvailableCountriesReducer(state, action);
        default:
            return state;
    }
}
const context = ContextCreater(
    DashboardReducer,
    { SetAvailableCountries, SetSummary },
    initialDashboardState,
    initialContextState
);

const DashboardContext: Context<IDashboardContext> = context.Context;
const DashboardProvider = context.Provider;

export { DashboardProvider, DashboardContext }
