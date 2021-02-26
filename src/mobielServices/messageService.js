import Api from './mobielAPI';


export const postMessage = async(messageObject) => {
    try {
        const postParameter = {
            "name": messageObject.name,
            "email": messageObject.email,
            "telephone": messageObject.telephone,
            "place": messageObject.place,
            "message": messageObject.message
        };

        const response = await Api.post('/Message', postParameter);

        return await response;
    }catch(error) {
        console.log(error);
    }
}