import { numberWithCommas } from "../../../Helpers/NumberHelper";
import { Column } from "../Models/ICountriesColumns";

export const columns: Column[] = [
    { id: 'Country', label: 'Country', minWidth: 170 },
    {
        id: 'TotalConfirmed',
        label: 'Total Confirmed',
        minWidth: 130,
        align: "center",
        format: (value: number) => numberWithCommas(value),
    },
    {
        id: 'TotalRecovered',
        label: 'Total Recovered',
        minWidth: 130,
        align: "center",
        format: (value: number) => numberWithCommas(value),
    },
    {
        id: 'TotalDeaths',
        label: 'Total Deaths',
        minWidth: 130,
        align: "center",
        format: (value: number) => numberWithCommas(value),
    },
    {
        id: 'NewConfirmed',
        label: 'New Confirmed',
        minWidth: 130,
        align: "center",
        format: (value: number) => numberWithCommas(value),
    },
    {
        id: 'NewRecovered',
        label: 'New Recovered',
        minWidth: 130,
        align: "center",
        format: (value: number) => numberWithCommas(value),
    },
    {
        id: 'NewDeaths',
        label: 'New Deaths',
        minWidth: 130,
        align: "center",
        format: (value: number) => numberWithCommas(value),
    },
];