import Api from './mobielAPI';

export const getYearFinancials = async (year) => {
    try{
        const response = await Api.get('/Auth/PsyFinancials/all/' + year);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const getYearFinancialsPerParamedic = async (paramedic, year) => {
    try{
        const response = await Api.get('/Auth/PsyFinancials/' + paramedic + '/' + year);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const getPrestationsPerMonth = async (month, year) => {
    try{
        month++;
        const response = await Api.get('/Auth/PsyFinancials/all/' + month + '/' + year);
        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const getPrestationsPerMonthPerParamedic = async (paramedic, month, year) => {
    try{
        month++;
        const response = await Api.get('/Auth/PsyFinancials/' + paramedic + '/' + month + '/' + year);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const commitMonth = async(paramedic, monthNumber, year) => {
    try {
        monthNumber++;
        const postParameter = {};
        const response = await Api.post('/Auth/PsyFinancials/' + paramedic + '/' + monthNumber + '/' + year, postParameter);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const invoiceMonth = async(paramedic, monthNumber, year) => {
    try {
        monthNumber++;
        const postParameter = {};
        const response = await Api.post('/Auth/PsyFinancials/generateInvoice/' + paramedic + '/' + monthNumber + '/' + year, postParameter);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}