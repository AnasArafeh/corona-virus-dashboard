export interface IAPIRoute {
    [key: string]: IAPIRouteDetails
}

interface IAPIRouteDetails {
    Name: string,
    Description: string,
    Path: string
}