import axios from "axios";

export const callAPI = async (obj) => {
  try {
    const data = await axios(obj);

    return [data.data, null];
  } catch (error) {
    console.log(error);

    return [null, error];
  }
};
