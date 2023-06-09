import axios from "axios";

const API_BASE_URL = 'http://51.158.179.21/api/v1';

axios.defaults.baseURL = API_BASE_URL;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'

// Authentication token
// export const [ authToken, setAuthToken ] = useState();

export let authToken = null;
export let user = null;

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
    
      authToken = response.data.token;
      console.log('>>> Token received:', authToken);

      return true;
    } catch (error) {
      console.error('<<< Error getting token:', error);

      return false;
    }
  };

export const getUserByToken = async () => {

  const url = '/auth/user';

  const data = {
    email: userEmail,
    password: userPassword,
  };

    try {
      const response = await axios.get( url, data);

      return true;
    } catch (error) {
      console.error('<<< Error getting token:', error);

      return false;
    }

}