import { ICovidStats } from "../../../Models/IDashboard";

export const initialSummaryState: ICovidStats = {
    Global: {
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0
    },
    Countries: [],
    Date: new Date()
}