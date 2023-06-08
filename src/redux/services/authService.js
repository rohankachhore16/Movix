import Axios from "axios";
import { METHODS, SERVICE_ROUTES } from "../reduxConstant/serviceConstant";

export function userLoginService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.LOGIN,
      method: METHODS.POST,
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

export function crateUserService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.USER,
      method: METHODS.POST,
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
