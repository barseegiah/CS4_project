const fetchData = async (endpoint, method) => {
    try {
      const requestOptions = {
        method,
        headers: {
          'Content-Type': 'application/json' // Assuming JSON data is being sent/received
        }
      };
  
      const response = await fetch(endpoint, requestOptions);
  
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      // Parse the JSON response
      const data = await response.json();
  
      // Log or process the retrieved data
      return data;
    } catch (error) {
      // Log and handle any errors
      console.error('Error fetching data:', error);
    }
  };
  
  export default fetchData;