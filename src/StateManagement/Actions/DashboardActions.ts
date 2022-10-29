import { ICountry, ICovidStats } from "../../Models/IDashboard";
import { IDashboardAction, SET_AVAILABLE_COUNTRIES, SET_IS_LOADING, SET_SUMMARY } from "../Interfaces/IDashboardActions";

export const SetSummary = dispatch => (data: ICovidStats): IDashboardAction => dispatch({
    type: SET_SUMMARY,
    payload: data
});


export const SetAvailableCountries = dispatch => (data: ICountry): IDashboardAction => dispatch({
    type: SET_AVAILABLE_COUNTRIES,
    payload: data
});

export const SetIsLoading = dispatch => (data: boolean): IDashboardAction => dispatch({
    type: SET_IS_LOADING,
    payload: data
});


