import Api from './mobielAPI';

export const getParamedics = async() => {
    try{
        const response = await Api.get('/Paramedics');

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const getParamedic = async (paramedicCode) => {
    try{
        const response = await Api.get('/Paramedics/' + paramedicCode);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const getParamedicByName = async (paramedicName) => {
    try{
        const response = await Api.get('/Team/' + paramedicName);

        return await response;
    }catch(error) {
        console.log(error);
    }
}

export const getLocations = async (paramedicCode, allLocations) => {
    try{
        const response = await Api.get('/Locations/byParamedic/' + paramedicCode + '/' + allLocations);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const getByLocation = async (locationID) => {
    try{
        const response = await Api.get('/Paramedics/byLocation/' + locationID);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const getByTopLocation = async (locationID) => {
    try{
        const response = await Api.get('/Paramedics/byTopLocation/' + locationID);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const toggleLocation = async (paramedicCode, locationID) => {
    try {
        const postParameter = {};
        const response = await Api.post('/Auth/PsyLocations/' + paramedicCode + '/' + locationID, postParameter);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const getCommissions = async (paramedicCode) => {
    if(paramedicCode)
        try{
            const response = await Api.get('/Auth/Paramedics/getCommissions/' + paramedicCode);

            return await response;
        }catch(error) {
            Api.handleErrorRoutes(error);
        } 
}