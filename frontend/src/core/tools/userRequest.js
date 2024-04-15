import axios from "axios";

const sendRequest = async (method, route, body) => {
  try {
    axios.defaults.baseURL =
      "https://b233-185-127-183-112.ngrok-free.app/auth/";

    const response = await axios.request({
      method: method,
      url: route,
      data: body,
      headers: {
        "Content-Type": "application/json",
        
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default sendRequest;
