export const binaryToAll = (no, type) => {
  return no ? parseInt(no, 2).toString(type).toUpperCase() : "";
};

export const decimalToAll = (no, type) => {
  return no ? parseInt(no, 10).toString(type).toUpperCase() : "";
};

export const octalToAll = (no, type) => {
  return no ? parseInt(no, 8).toString(type).toUpperCase() : "";
};

export const hexaDecimalToAll = (no, type) => {
  return no ? parseInt(no, 16).toString(type).toUpperCase() : "";
};
