import Api from './mobielAPI';

export const getMutualitys = async () => {
    const response = await Api.get('/Mutualitys');

    return await response;
}