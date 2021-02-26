import Api from './mobielAPI';
import dayjs from 'dayjs';
import locale_nl from 'dayjs/locale/nl-be';

export const getMySchedule = async (paramedicCode, weekOffset) => {
    try{
        const response = await Api.get('/Auth/PsySchedule/GetMySchedule');

        return await response.schedule;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const addScheduleSlot = async(dayNumber, startTime, endTime) => {
    dayjs.locale(locale_nl);
    
    try{
        const postParameter = {
            "dayNumber": dayNumber, 
            "startTime": dayjs.unix(startTime).format('HH:mm'), 
            "endTime": dayjs.unix(endTime).format('HH:mm')
        };

        const response = await Api.post('/Auth/PsySchedule', postParameter);

        return await response.schedule;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const deleteScheduleSlot = async (scheduleSlotID) => {
    try{
        const response = await Api.delete('/Auth/PsySchedule/' + scheduleSlotID);

        return await response.schedule;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}