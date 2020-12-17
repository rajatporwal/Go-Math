import { API_URLs, HttpUtil } from '../utils';

export const loginUser = (data, header = {'Access-Control-Allow-Origin': true}) => async(dispatch) => (
    HttpUtil.makePOST(API_URLs.LOGIN_USER_API_URL, JSON.stringify(data), header)
    .then(response => {
        // if (response.success) {
        if (response) {
            // Banner('Success', 'Record created successfully.', 'success');
            console.log('user logged in', response);
        } else {
            console.log('user logged out', response);
            // displayWarning('Error', response.data.message, 'error', response);
        }
        return response;
    })
    .catch((err) => {
        console.log('Error', 'Something went wrong.', 'error');
    })
)