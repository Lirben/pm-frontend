import Api from './mobielAPI';

export const getPractices = async () => {
    try{
        const response = await Api.get('/Practices');

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const isPracticeAvailable = async(startTime, endTime, practiceID) => {
    try{
        const response = await Api.get('/Practice/' + practiceID + '/' + startTime + '/' + endTime);

        return await response.available;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}