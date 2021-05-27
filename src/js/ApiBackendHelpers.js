import { get, post, del } from './ApiHelpers';
const apiBase = 'http://mobile-reality-backend.sadek.usermd.net/';

export const getHousesApi = async () => {
    return await get(`${apiBase}houses/all`);
};

export const getHouseApi = async (id) => {
    return await get(`${apiBase}house/${id}`);
};

export const deleteHouseApi = async (id) => {
    return await del(`${apiBase}house/${id}`);
};
