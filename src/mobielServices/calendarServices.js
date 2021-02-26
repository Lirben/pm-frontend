import Api from './mobielAPI';

export const getCalendarByParamedic = async (paramedicCode, weekOffset) => {
    try{
        const response = await Api.get('/Auth/PsyCalendar/' + paramedicCode + '/' + weekOffset);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const getCalendarByLocation = async (locationID, weekOffset) => {
    try{
        const response = await Api.get('/Calendar/' + weekOffset +'/' + locationID);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const getFirstFreeWeek = async (locationID) => {
    try {
        const response = await Api.get('/Calendar/' + locationID);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const unblockSlot = async(code) => {
    try {
        const response = await Api.delete('/Auth/PsyCalendar/CalendarItem/' + code);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const blockSlot = async(startTime, endTime, paramedicCode) => {
    try {
        const postParameter = { 'startTime': startTime, 'endTime':endTime, 'paramedic': paramedicCode };;
        const response = await Api.post('/Auth/PsyCalendar/CalendarItem', postParameter);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }    
}