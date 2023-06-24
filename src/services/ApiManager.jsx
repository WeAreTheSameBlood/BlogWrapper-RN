import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_BASE_URL = 'http://51.158.179.21/api/v1';

axios.defaults.baseURL = API_BASE_URL;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

// Authentication token
const handleTokenReceived = async (receivedToken) => {
  try {
    await AsyncStorage.setItem('token', receivedToken);
    console.log('Token saved successfully');
  } catch (error) {
    console.error('Error saving token:', error);
  }
};

export const regNerUser = async (personEmail, personPassword, personName) => {

  const url = '/users';

  const data = {
    email: personEmail,
    password: personPassword,
    name: personName,
    extra_details: "I love dogs and motorcycles.",
    skills: "And I will design the plane, and I will stop the horse on the run.",
    profession: "Java Swift ReactNative Fullstack Software Engineer",
    details: "My deadlift record is 220 kg."
  };

    try {
      await axios.post( url, data);
      console.log('>>> Registration successful');

      return true;
    } catch (error) {
      console.error('<<< Registration error :', error);

      return false;
    }
  };

export const getToken = async (userEmail, userPassword) => {

  const url = '/auth';

  const data = {
    email: userEmail,
    password: userPassword,
  };

    try {
      const response = await axios.post( url, data);
    
      handleTokenReceived(response.data.token)
      console.log('>>> Token received:', await AsyncStorage.getItem('token'));

      return true;
    } catch (error) {
      console.error('<<< Error getting token:', error);

      return false;
    }
  };

export const checkToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      console.log('Token retrieved successfully:', token);
      return true;
    }
  } catch (error) {
    console.error('Error retrieving token:', error);
    return false;
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
    console.log('Token removed successfully');
  } catch (error) {
    console.error('Error removing token:', error);
  }
};
  
export const getUserByToken = async () => {

  const url = '/auth/user';

    try {
      const response = await axios.get( url, {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${await AsyncStorage.getItem('token')}`,
        }
      });

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error('<<< Error getting user:', error);

      return null;
    }

}

export const getAllPosts = async () => {
  const url = '/posts';
  try {
    const response = await axios.get( url, {
      headers: {
        Accept: 'application/json',
      }
    });

    // console.log(response.data);

    return response.data;
  } catch (error) {
    console.error('<<< Error getting posts:', error);

    return null;
  }
}