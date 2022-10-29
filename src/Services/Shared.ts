import HttpServices from "./BaseAPI";

export async function getApiRoutes() {
    return await HttpServices.get(`/`);
}