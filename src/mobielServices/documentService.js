import Api from './mobielAPI';

export const getPaybackForm = async (treatmentID, fileName) => {
    try{
        const response = await Api.getDocument('/Auth/Treatment/' + treatmentID + '/GetPaybackForm/' + fileName);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const createPaybackForms = async (treatmentID) => {
    try{
        const response = await Api.get('Auth/Treatment/' + treatmentID + '/GeneratePaybackForms');

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}