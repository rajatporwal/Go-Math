import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";
import { CONVERSION_ROUTES } from "../Home/ConversionRoutes";
import NumberConvertor from "./NumberConvertor";

const renderChildren = (type) => {
  switch (type) {
    case "number_convertor": {
      return <NumberConvertor />;
    }
    case "number_calculator": {
      return <div>Number Calculator Work In Progress !!</div>;
    }
    case "hcf_lcm": {
      return <div>HCF LCM Work In Progress !!</div>;
    }
    case "infix_prefix_postfix": {
      return <div>Infix Prefix Postfix Work In Progress !!</div>;
    }
    case "weight_convertor": {
      return <div>Weight Convertor Work In Progress !!</div>;
    }
    case "temperature_convertor": {
      return <div>Temperature Convertor Work In Progress !!</div>;
    }
    case "length_convertor": {
      return <div>Length Convertor Work In Progress !!</div>;
    }
    default:
      return <NumberConvertor />;
  }
};

const Conversion = ({ type }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SIDE_BAR_OPTIONS",
      value: [{ heading: "Conversion", children: [...CONVERSION_ROUTES] }]
    });
  });

  return (
    <div className="conversion">
      <h1>Conversion and Calculator</h1>
      <hr />
      <div className="conversion__home">
        <div>
          {renderChildren(window.location.hash.replace("#/conversion#", ""))}
        </div>
        <div className="conversion__list">
          <h3>See Also</h3>
          {
            <ul className="conversion__li">
              {CONVERSION_ROUTES.map((r) => (
                <li>
                  <Link
                    active
                    to={{
                      pathname: r.pathname,
                      hash: r.id
                    }}
                    smooth
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default Conversion;
