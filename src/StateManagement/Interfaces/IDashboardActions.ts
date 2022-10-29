import { ICountry, ICovidStats } from "../../Models/IDashboard";
import { IAPIRoute } from "../../Models/IShared";
import { IAction } from "./IAction";

export const SET_SUMMARY = "SET_SUMMARY";
export const SET_AVAILABLE_COUNTRIES = "SET_AVAILABLE_COUNTRIES";
export const SET_IS_LOADING = "SET_IS_LOADING";

export interface IDashboardAction extends IAction {
    payload: any
}

export interface IDashboardState {
    summary: ICovidStats,
    isLoading: boolean,
    availableCountries: ICountry[]
}

export interface IDashboardContext {
    SetSummary: (data: ICovidStats) => IDashboardAction,
    SetIsLoading: (data: boolean) => IDashboardAction,
    SetAvailableCountries: (data: ICountry) => IDashboardAction,
    state: IDashboardState
}

