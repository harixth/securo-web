import axios from "axios";
import { CustomerDto } from "../pages";

const customerAxios = axios.create({
  baseURL: process.env.REACT_APP_MAIN_API_URL || "http://localhost:4000",
  headers: {
    "X-Request-Agent": "sg-dashboard",
    "Content-Type": "application/json",
  },
});

export async function createCustomer(customerDto: CustomerDto) {
  try {
    const { data } = await customerAxios.post("customer", customerDto);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllCustomer() {
  try {
    const { data } = await customerAxios.get("customer");
    return data;
  } catch (error) {
    console.log(error);
  }
}
