import { SET_ROUTES, ISharedAction } from "../Interfaces/ISharedActions";

export const SetRoutes = dispatch => (data: string): ISharedAction => dispatch({
    type: SET_ROUTES,
    payload: data
});
