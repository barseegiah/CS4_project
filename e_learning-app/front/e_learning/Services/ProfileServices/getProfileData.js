import { URL } from "../../screens/constants";
import fetchData from "../fetchData";
const getProfileData = async (id) => {
    const profileEndpoint =`${URL}/user-details/${id}`; // Replace with your actual profile endpoint
    const method = 'GET'; // Assuming you're fetching profile data with a GET request
    try {
      const profileData = await fetchData(profileEndpoint, method);
      return profileData;
    } catch (error) {
      // Handle errors specific to fetching profile data, if necessary
      console.error('Error fetching profile data:', error);
      return null; // Return null or handle the error gracefully
    }
  };

  export default getProfileData;