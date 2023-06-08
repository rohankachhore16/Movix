import Axios from "axios";
import { METHODS, SERVICE_ROUTES } from "../reduxConstant/serviceConstant";

export function getProductService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.PRODUCT,
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
