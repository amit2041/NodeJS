const axios = require('axios');
// Please do not change the prewritten code

const Solution = async () => {
  // Write your code here
  try {
    const response = await axios.get('https://api.codingninjas.com/api/v3/event_tags');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
Solution();
module.exports = Solution;