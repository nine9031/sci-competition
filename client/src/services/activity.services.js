import api from "./api";
const API_URL = import.meta.env.VITE_ACTIVITY_API;

const createActivity = (activityData) => {
  return await api.post(`${API_URL}/`, activityData);
  
}
