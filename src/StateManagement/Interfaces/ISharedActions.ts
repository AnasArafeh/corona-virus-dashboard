import { IAPIRoute } from "../../Models/IShared";
import { IAction } from "./IAction";

export const SET_ROUTES = "SET_ROUTES";


export interface ISharedAction extends IAction {
    payload: any
}


export interface ISharedState {
    apiRoutes: IAPIRoute,
}

export interface ISharedContext {
    SetRoutes: (data: string) => ISharedAction,
    state: ISharedState
}

