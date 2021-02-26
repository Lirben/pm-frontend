import axios from "axios";
import { goto } from '@sapper/app';

// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
  baseURL : process.env.SAPPER_APP_API_URL
});

// implement a method to execute all the request from here.
const apiRequest = (method, url, request) => {
    const headers = {
        authorization: ""
    };
    //using the axios instance to perform the request that received from each http method
    return axiosAPI({
        method,
        url,
        mode: 'cors',
        withCredentials: true,
        data: encodeBody(request),
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      }).then(res => {
        return Promise.resolve(res.data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
};

function encodeBody(details)
{
    var formBody = [];

    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }

    return formBody.join("&");
}

const apiRequestFile = (url, request) => {
  const headers = {
      authorization: ""
  };
  //using the axios instance to perform the request that received from each http method
  return axiosAPI({
      method: 'get',
      url,
      mode: 'cors',
      withCredentials: true,
      data: request,
      responseType: 'blob'
    }).then(res => {
      return Promise.resolve(res.data);
    })
    .catch(err => {
      return Promise.reject(err);
    });
};

// function to execute the http get request
const get = (url, request) => apiRequest("get",url,request);

// function to fetch a document
const getDocument = (url, request) => apiRequestFile(url,request)

// function to execute the http delete request
const deleteRequest = (url, request) =>  apiRequest("delete", url, request);

// function to execute the http post request
const post = (url, request) => apiRequest("post", url, request);

// function to execute the http put request
const put = (url, request) => apiRequest("put", url, request);

// function to execute the http path request
const patch = (url, request) =>  apiRequest("patch", url, request);

const handleErrorRoutes = (error) => {
  if(error.response.status == 403 || error.response.status == 401)
  {
      if (process.browser)
      {
        console.log('Redirect to loginpage...');
        goto('/login');
      }
      console.log('On server ...');
  }else
      console.log(error);
}

// expose your method to other services or actions
const API ={
    get,
    getDocument, 
    delete: deleteRequest,
    post,
    put,
    patch,
    handleErrorRoutes
};
export default API;

