import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getAllData = async () => {
  let res = await axios({
    method: "get",
    url: "http://localhost:5000/products",
    headers: { "content-type": "application/json" },
  }).catch((err) => toast.error("خطایی رخ داده است!"));
  res && toast.success("داده ها بارگذاری شد");
  return res;
};

export const getADataById = async (id) => {
  let res = await axios({
    method: "get",
    url: `http://localhost:5000/products/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => toast.error("خطایی رخ داده است!"));
  res && toast.success("داده ها بارگذاری شد");
  return res;
};

export const editADataById = async (id) => {
  let res = await axios({
    method: "put",
    url: `http://localhost:5000/products/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => toast.error("خطایی رخ داده است!"));
  res && toast.success("داده مورد نظر به روز شد");
  return res;
};

export const deleteADataById = async (id) => {
  let res = await axios({
    method: "delete",
    url: `http://localhost:5000/products/${id}`,
    headers: { "content-type": "application/json" },
  }).catch((err) => toast.error("خطایی رخ داده است!"));
  res && toast.success("داده ها بارگذاری شد");
  return res;
};

export const addAData = async (product) => {
  let res = await axios({
    method: "post",
    url: `http://localhost:5000/products/`,
    headers: { "content-type": "application/json" },
    data: JSON.stringify(product),
  }).catch((err) => toast.error("خطایی رخ داده است!"));
  res && toast.success("داده ها بارگذاری شد");
  return res;
};
