import Api from './mobielAPI';

export const getConversations = async () => {
    try{
        const response = await Api.get('/Conversations');

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}

export const getConversationByCode = async(code) => {
    try{
        const response = await Api.get('/Conversations/byCode/' + code);

        return await response;
    }catch(error) {
        Api.handleErrorRoutes(error);
    }
}