import axios from 'axios'

const getCookie = (name:string) => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }

  return null;
};

const cookie = getCookie('sessionid');

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9000',
  headers: {
    'Content-Type': 'application/json', 
    'Accept': 'application/json',
    'Authorization': `Bearer ${cookie}`
  },
})

export default axiosInstance;
