import createDataContext from './createDataContext';
import tutorApi from '../api/server';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../navigationRef';


const authReducer = (state, action) => {
    switch(action.type){
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signup':
            return {errorMessage: '', token: action.payload};
        case 'signin':
            return {errorMessage: '', token: action.payload};
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        case 'signout':
            return { token: null, errorMessage: '' };
        default:
            return state;
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({ type: 'signin', payload: token });
        RootNavigation.navigate('StudentTabNav', 'SignupActivation');
    }else{
        RootNavigation.navigate('Login', 'SignupActivation');
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
  };

const signup = (dispatch) => {
    return async ({ email, password}) => {
        try{
            const response = await tutorApi.post('/auth/register', { email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signup', payload: response.data.token});

            RootNavigation.navigate('SignupActivation', 'SignupActivation');
        }catch(err){
            dispatch({type: 'add_error', payload: 'Something went wrong'})
        }
    };
};

const signin = (dispatch) => {
    return async ({email, password}) => {
        try{
            const response = await tutorApi.post('/auth/login', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signin', payload: response.data.token});

            RootNavigation.navigate('StudentTabNav', 'StudentTabNav');
        }catch(err){
            console.log(err);
            dispatch({type: 'add_error', payload:'Something went wrong'});
        }
    };
};

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'signout' });
        RootNavigation.navigate('Login', 'StudentTabNav');
    };
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signup, signout, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage:''}
)