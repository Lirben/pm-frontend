import { readable } from 'svelte/store';
import { getUserDetails } from '../mobielServices/authService';

const initValue = { "paramedicCode": '', "level" : 0, "username": '' };

let user = readable(initValue, set => {
	fetchUserDetails()
		.then(set)
		.catch(error => {
			console.log(error);
		});

	return unsubscribe();
});

const fetchUserDetails = async () => {
	return await getUserDetails();	
}

function unsubscribe(){
	//Cleanup function
};

export {user};

