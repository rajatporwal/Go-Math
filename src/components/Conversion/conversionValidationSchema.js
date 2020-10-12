import * as Yup from "yup";

const binaryNoRegex = /^[0-1]+$/;
const octalNoRegex = /^[0-7]+$/;
const decimalNoRegex = /^[0-9]+$/;
const hexaDecimalNoRegex = /^[0-9A-Fa-f]+$/;

export const numberConversionSchema = Yup.object().shape({
  binaryNo: Yup.string().matches(binaryNoRegex, {
    message: "Please enter correct binary no, ex: 0110, 1010, 1111."
  }),
  octalNo: Yup.string().matches(octalNoRegex, {
    message: "Please enter correct binary no, ex: 2577, 1234, 342."
  }),
  decimalNo: Yup.string().matches(decimalNoRegex, {
    message: "Please enter correct decimal no, only integers are allowed."
  }),
  hexaDecimalNo: Yup.string().matches(hexaDecimalNoRegex, {
    message: "Please enter correct hexa decimal no, ex: AF123, 3421, CD3E."
  })
});
