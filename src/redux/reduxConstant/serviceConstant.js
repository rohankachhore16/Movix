export const SERVICE_ROUTES = {
  LOGIN: "auth/login",
  USER: "users/",
  PRODUCT: "products",
  PROFILE: "auth/profile",
  CATEGORIES: "categories",
  CARD_DELETE: "categories/",
};

export const METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};


export const replaceUrl = (url, data) => {
  var regex = new RegExp(":(" + Object.keys(data).join("|") + ")", "g");
  return url?.replace(regex, (m, $1) => data[$1] || m);
};