import HttpServices from "./BaseAPI";

export async function getCovidSummary(Rel) {
    return await HttpServices.get(`${Rel}`);
}

export async function getAvailableCountries(Rel) {
    return await HttpServices.get(`${Rel}`);
}