import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export const CONVERSION_ROUTES = [
  {
    name: "Number Convertor",
    path: "/conversion",
    id: "number_convertor"
  },
  {
    name: "Number Calculator",
    path: "/conversion",
    id: "number_calculator"
  },
  {
    name: "HCF - LCM",
    path: "/conversion",
    id: "hcf_lcm"
  },
  {
    name: "Infix - Prefix - Postfix",
    path: "/conversion",
    id: "infix_prefix_postfix"
  },
  {
    name: "Weight Convertor",
    path: "/conversion",
    id: "weight_convertor"
  },
  {
    name: "Temperature Convertor",
    path: "/conversion",
    id: "temperature_convertor"
  },
  {
    name: "Length Convertor",
    path: "/conversion",
    id: "length_convertor"
  }
];

const ConversionRoutes = () => (
  <>
    <h4>Conversion</h4>
    <ul className="home__list">
      {CONVERSION_ROUTES.map((r) => (
        <li>
          <Link
            active
            to={{
              pathname: r.path,
              hash: r.id
            }}
            smooth
          >
            {r.name}
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default ConversionRoutes;
