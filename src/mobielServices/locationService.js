import Api from './mobielAPI';

export const getLocationList = async () => {
    const response = await Api.get('/LocationsLight');

    return await response;
}

export const getTopLocationList = async() => {
    const response = await Api.get('/TopLocationsLight');

    return await response;
}

export const getSubLocations = async(locationName) => {
    const response = await Api.get('/LocationsLight/byName/' + locationName);

    return await response;
}

export const getLocationsGEOJSON = async() => {
    const response = await Api.get('/TopLocations');

    return await response;
}

export const getSubLocationsGEOJSON = async(locationName) => {
    const response = await Api.get('/Locations/byName/' + locationName);

    return await response;
}

export const getPlaceTypes = async() => {
    const response = await Api.get('/PlaceTypes');

    return await response;
}