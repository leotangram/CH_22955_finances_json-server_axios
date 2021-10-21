import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/",
  headers: { "Content-Type": "application/json" },
});

export const getData = async (endPoint) => {
  try {
    const { data } = await instance.get(`/${endPoint}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addData = async (data, endPoint) => {
  try {
    await instance.post(`${endPoint}`, data);
  } catch (error) {
    console.log(error);
  }
};
