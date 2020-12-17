const axios = require("axios");

const makePOST = async (url, data, headers, parsedError = true) => {
  try {
    let result = await axios.post(url, data, { headers });
    return defaultSuccessHandler(result);
  } catch (e) {
    return parsedError ? parseNetworkError(e) : e;
  }
};

const makeGET = async (url, params, headers, parsedError = true) => {
  try {
    let result = await axios.get(url, { params, headers });
    return defaultSuccessHandler(result);
  } catch (e) {
    return parsedError ? parseNetworkError(e) : e;
  }
};

const makeDELETE = async (url, params, headers, parsedError = true) => {
  try {
    let result = await axios.delete(url, { params, headers });
    return defaultSuccessHandler(result);
  } catch (e) {
    return parsedError ? parseNetworkError(e) : e;
  }
};

const makePUT = async (url, data, headers, parsedError = true) => {
  try {
    let result = await axios.put(url, data, { headers });
    return defaultSuccessHandler(result);
  } catch (e) {
    return parsedError ? parseNetworkError(e) : e;
  }
};

/**
 * Default Handler for Each Network request
 * @param {*} response
 * @returns {} Success Object{ success: true, status: , data: };
 */
let defaultSuccessHandler = function (response) {
  return {
    success: true,
    status: response.status,
    data: response.data,
    headers: response.headers
  };
};

/**
 *  Default Handler for Error from Network requests
 * @param {*} error
 * @returns {} Error Object{ error: boolean, status: , data: , message?: , isCancel?:};
 */
const parseNetworkError = (error) => {
  let errorResponse = {};
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    errorResponse = {
      error: true,
      result: "error",
      status: error.response.status,
      data: error.response.data,
      headers: error.response.headers
    };
  } else if (axios.isCancel(error)) {
    // This one is intentionally canceled request
    errorResponse = {
      error: false,
      result: "canceled",
      status: null,
      data: null,
      message: error.message,
      isCancel: true
    };
  } else {
    // Something happened in setting up the request that triggered an Error
    // OR
    // The request was made but no response was received
    errorResponse = {
      error: true,
      result: "error",
      status: null,
      data: null,
      message: error.message
    };
  }

  return errorResponse;
};

/**
 * get datatype of property
 *
 * @param {any} prop
 * @param {string} type
 * @returns {boolean}
 */
let typeOf = function (prop, type) {
  const dataset = {
    object: "[object Object]",
    array: "[object Array]",
    string: "[object String]",
    boolean: "[object Boolean]",
    number: "[object Number]",
    date: "[object Date]",
    undefined: "[object Undefined]",
    null: "[object Null]",
    promise: "[object Promise]",
    asyncFunction: "[object AsyncFunction]",
    function: "[object Function]"
  };

  return Object.prototype.toString.call(prop) === dataset[type];
};

export const HttpUtil = {
  makeGET,
  makeDELETE,
  makePOST,
  makePUT,
  typeOf
};
