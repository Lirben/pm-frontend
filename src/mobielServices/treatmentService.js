import Api from './mobielAPI';

export const getActiveTreatments = async () => {
    try{
        //Statuscode 4 = alle active behandelingen (nieuw & toegewezen in Backend termen)
        const response = await Api.get('/Auth/Treatments/GetByStatus/4');

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);  
    }
}

export const getArchivedTreatments = async () => {
    try{
        //Statuscode 3 = alle inactive behandelingen
        const response = await Api.get('/Auth/Treatments/GetByStatus/3');

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);  
    }
}

export const getMyActiveTreatments = async() => {
    try{
        const response = await Api.get('/Auth/Treatments/GetMyActiveTreatments');

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const getTreatmentStatus = async() => {
    try{
        const response = await Api.get('/TreatmentStatus');

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error); 
    }
}

export const getTreatment = async(treatmentID) => {
    try{
        const response = await Api.get('/Auth/Treatment/' + treatmentID);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const createTreatment = async(treatment) => {
    try {
        const postParameter = {"JSONBody": JSON.stringify(treatment)};
        const response = await Api.post('/Treatment', postParameter);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
        console.log(error);
    }
}

export const updateTreatment = async(treatment) => {
    try {
        const postParameter = {"JSONBody": JSON.stringify(treatment)};
        const response = await Api.post('/Treatment/' + treatment.treatmentID, postParameter);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
        console.log(error);
    }
}

export const createTreatmentWithPromise = async(treatment) => {
    const postParameter = {"JSONBody": JSON.stringify(treatment)};
    return await Api.post('/Treatment', postParameter);
}

export const updateTreatmentPlaces = async(treatment) => {
    const postParameter = {"JSONBody": JSON.stringify(treatment.places[0])};
    return await Api.post('/Treatments/' + treatment.prospect.firstName + '/' + treatment.prospect.email + '/Places', postParameter);
}

export const updateTreatmentDetails = async(treatment) => {
    const postParameter = {"JSONBody": JSON.stringify(treatment)};
    return await Api.post('/Treatments/' + treatment.prospect.firstName + '/' + treatment.prospect.email + '/Details', postParameter);
}

export const makeAppointment = async(startTime, treatment, conversation, paramedic, place, sendMail) => {
    try {
        const postParameter = {"JSONBody": JSON.stringify({ "moment": { "startTime": startTime}, "prospect": treatment.prospect, "paramedic": paramedic, "conversation": conversation, "place": place})};
        const intSendMail = sendMail ? 1 : 0;        
        const response = await Api.post('/Treatment/' + treatment.treatmentID + '/Appointment/' + intSendMail, postParameter);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const createTreatmentAndMakeAppointment = async(treatment, appointment) => {
    try {
        const postParameter = {
            "JSONBodyTreatment": JSON.stringify(treatment),
            "JSONBodyAppointment": JSON.stringify(appointment)
        };
     
        const response = await Api.post('/Treatment/Appointment/1', postParameter);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error); 
    }
}

export const updateAppointment = async(appointment) => {
    try {
        const postParameter = {"JSONBody": JSON.stringify({"appointmentPrice" : parseFloat(appointment.appointmentPrice) })};
        const response = await Api.post('/Auth/Treatment/' + appointment.treatmentID + '/Appointment/' + appointment.appointmentID, postParameter);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);  
    }
}

export const cancelAppointment = async(appointment, sendMail) => {
    try {
        const response = await Api.delete('/Treatment/' + appointment.treatmentID + '/Appointment/' + appointment.appointmentID + '/' + sendMail);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}