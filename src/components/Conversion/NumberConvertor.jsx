import React from "react";
import { Button, Card, Input, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Formik, Form, Field } from "formik";
import {
  binaryToAll,
  decimalToAll,
  octalToAll,
  hexaDecimalToAll
} from "../../helper";
import { numberConversionSchema } from "./conversionValidationSchema";

const binaryTitle = `In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system, which uses only two symbols: typically "0" (zero) and "1" (one). The base-2 numeral system is a positional notation with a radix of 2. Each digit is referred to as a bit.`;

const deciamlTitle = `If the Base value of a number system is 10, then it is called Decimal number system which has most important role in the development of science and technology. This is the weighted (or positional) number representation, where value of each digit is determined by its position (or their weight) in a number. This is also known as base-10 number system which has 10 symbols, these are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Position of every digit has a weight which is a power of 10. Each position in the decimal system is 10 times more significant than the previous position, that means numeric value of a decimal number is determined by multiplying each digit of the number by the value of the position in which the digit appears and then adding the products.`;

const octalTitle =
  "The octal numeral system, or oct for short, is the base-8 number system, and uses the digits 0 to 7. Octal numerals can be made from binary numerals by grouping consecutive binary digits into groups of three (starting from the right). For example, the binary representation for decimal 74 is 1001010.";
const hexaDecimalTitle = `The word “Hexadecimal” means sixteen because this type of digital numbering system uses 16 different digits from 0-to-9, and A-to-F. ... These binary sets can have any value from 010 ( 00002 ) to 1510 ( 11112 ) representing the hexadecimal equivalent of 0 through to F.`;

const NumberConvertor = () => {
  const initialValues = {
    binaryNo: "",
    octalNo: "",
    decimalNo: "",
    hexaDecimalNo: ""
  };

  const handleBinaryNoChange = (no, setFieldValue) => {
    setFieldValue("decimalNo", binaryToAll(no, 10));
    setFieldValue("octalNo", binaryToAll(no, 8));
    setFieldValue("hexaDecimalNo", binaryToAll(no, 16));
  };

  const handleOctalNoChange = (no, setFieldValue) => {
    setFieldValue("binaryNo", octalToAll(no, 2));
    setFieldValue("decimalNo", octalToAll(no, 10));
    setFieldValue("hexaDecimalNo", octalToAll(no, 16));
  };

  const handleDecimalNoChange = (no, setFieldValue) => {
    setFieldValue("binaryNo", decimalToAll(no, 2));
    setFieldValue("octalNo", decimalToAll(no, 8));
    setFieldValue("hexaDecimalNo", decimalToAll(no, 16));
  };

  const handleHexaDecimalNoChange = (no, setFieldValue) => {
    setFieldValue("binaryNo", hexaDecimalToAll(no, 2));
    setFieldValue("octalNo", hexaDecimalToAll(no, 8));
    setFieldValue("decimalNo", hexaDecimalToAll(no, 10));
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={numberConversionSchema}
    >
      {({
        values,
        resetForm,
        submitForm,
        errors,
        touched,
        dirty,
        setFieldValue
      }) => (
        <Form validateOnChange={true}>
          <div>
            <Card
              title="Number Convertor"
              // extra={<a href="#">More</a>}
              // style={{ width: 800 }}
            >
              <div className="no_conversion">
                <div>
                  <div className="no_conversion__label">
                    <label>Binary Number</label>
                    <Tooltip placement="right" title={binaryTitle}>
                      <InfoCircleOutlined className="no_conversion__icon" />
                    </Tooltip>
                  </div>
                  <div>
                    <Field
                      name="binaryNo"
                      render={({ field }) => (
                        <>
                          <Input
                            name={field.name}
                            id={field.name}
                            type="number"
                            size="large"
                            placeholder="Enter Binary Number"
                            value={field.value}
                            onChange={(e) => {
                              field.onChange(e);
                              handleBinaryNoChange(
                                e.target.value,
                                setFieldValue
                              );
                            }}
                          />
                          <span className="no_conversion__warning">
                            {errors[field.name]}
                          </span>
                        </>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <div className="no_conversion__label">
                    <label>Octal Number</label>
                    <Tooltip placement="right" title={octalTitle}>
                      <InfoCircleOutlined className="no_conversion__icon" />
                    </Tooltip>
                  </div>
                  <div>
                    <Field
                      name="octalNo"
                      render={({ field }) => (
                        <>
                          <Input
                            name={field.name}
                            id={field.name}
                            type="number"
                            size="large"
                            placeholder="Enter Octal Number"
                            value={field.value}
                            onChange={(e) => {
                              field.onChange(e);
                              handleOctalNoChange(
                                e.target.value,
                                setFieldValue
                              );
                            }}
                          />
                          <span className="no_conversion__warning">
                            {errors[field.name]}
                          </span>
                        </>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <div className="no_conversion__label">
                    <label>Decimal Number</label>
                    <Tooltip placement="right" title={deciamlTitle}>
                      <InfoCircleOutlined className="no_conversion__icon" />
                    </Tooltip>
                  </div>
                  <div>
                    <Field
                      name="decimalNo"
                      render={({ field }) => (
                        <>
                          <Input
                            name={field.name}
                            id={field.name}
                            type="number"
                            size="large"
                            placeholder="Enter Deciaml Number"
                            value={field.value}
                            onChange={(e) => {
                              field.onChange(e);
                              handleDecimalNoChange(
                                e.target.value,
                                setFieldValue
                              );
                            }}
                          />
                          <span className="no_conversion__warning">
                            {errors[field.name]}
                          </span>
                        </>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <div className="no_conversion__label">
                    <label>Hexa Decimal Number</label>
                    <Tooltip placement="right" title={hexaDecimalTitle}>
                      <InfoCircleOutlined className="no_conversion__icon" />
                    </Tooltip>
                  </div>
                  <div>
                    <Field
                      name="hexaDecimalNo"
                      render={({ field }) => (
                        <>
                          <Input
                            name={field.name}
                            id={field.name}
                            size="large"
                            placeholder="Enter Hex Number"
                            value={field.value}
                            onChange={(e) => {
                              field.onChange(e);
                              handleHexaDecimalNoChange(
                                e.target.value,
                                setFieldValue
                              );
                            }}
                          />
                          <span className="no_conversion__warning">
                            {errors[field.name]}
                          </span>
                        </>
                      )}
                    />
                  </div>
                </div>
                <div style={{ width: "max-content", marginLeft: "auto" }}>
                  <div />
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => resetForm()}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NumberConvertor;
