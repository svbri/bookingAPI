import axios from "axios";

export const fetchAll = async (urlBase, endpoint, setter) => {
  try {
    const resp = await axios.get(`${urlBase}/${endpoint}`);
    return setter(resp.data);
  } catch (error) {
    console.warn(error)
  };
};