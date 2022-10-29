export interface ICovidStats {
    Global: IGlobalStats,
    Countries: ICountryStats[],
    Date: Date
}

interface IGlobalStats {
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number
}

interface ICountryStats {
    Country: string,
    CountryCode: string,
    Slug: string,
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number,
    Date: Date
}

export interface ICountry {
    Country: string,
    Slug: string,
    ISO2: string
}