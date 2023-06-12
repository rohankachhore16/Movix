import Axios from "axios";
import { METHODS, SERVICE_ROUTES } from "../reduxConstant/serviceConstant";

export function getProductService(data) {
  const { filter, page } = data;
  return new Promise((resolve, reject) => {
    let config = {

      url: `${SERVICE_ROUTES.PRODUCT}/?offset=${page}&limit=10&categoryId=${filter}`,

      mehtod: METHODS.GET,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

export function getCategoriesServices(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.CATEGORIES,
      mehtod: METHODS.GET,
      data,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

export function cardDelteService(data) {
  // const {id} = data
  return new Promise((resolve, reject) => {
    let config = {
      url: `${SERVICE_ROUTES.CARD_DELETE}${data}`,
      method: METHODS.DELETE,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}
