import Axios from "axios";
import { METHODS, SERVICE_ROUTES } from "../reduxConstant/serviceConstant";

export function ProfileService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.PROFILE,
      method: METHODS.GET,
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
