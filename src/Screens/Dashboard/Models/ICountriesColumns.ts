export interface Column {
    id: 'Country' | 'TotalConfirmed' | 'TotalDeaths' | 'TotalRecovered' | 'NewConfirmed' | 'NewDeaths' | 'NewRecovered';
    label: string;
    minWidth?: number;
    align?: 'right' | "center" | "left";
    format?: (value: number) => string;
}
