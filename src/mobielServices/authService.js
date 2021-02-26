import Api from './mobielAPI';
import { goto } from '@sapper/app';

export const login = async (credentials) => {
    return await Api.post('/Login', credentials)
        .then((response) => {
            return true;
        }, (error) => {
            Api.handleErrorRoutes(error);
            return false;
        });
}

export const logout = async() => {
    try{
        const response = await Api.get('/Logout');
        //heap.resetIdentity();
        goto('/');
    }catch(error) {
        console.log(error);
    }
}

export const getUserDetails = async () => {
    return await Api.get('/MyUserDetails')
        .then(response => {
            return response;
        }, error => {
            
            if (process.browser) {
              console.log('Redirect to loginpage...');
              goto('/login');
            }

            console.log('On server ...');
        });
};

export const updatePassword = async(oldPassword, newPassword) => {    
    const postParameter = {"oldPassword": oldPassword, "newPassword": newPassword};
    const response = await Api.post('/Password', postParameter);

    return await response;
};