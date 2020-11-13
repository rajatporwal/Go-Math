import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export const CONVERSION_ROUTES = [
  {
    title: "Number Convertor",
    pathname: "/conversion",
    id: "number_convertor"
  },
  {
    title: "Number Calculator",
    pathname: "/conversion",
    id: "number_calculator"
  },
  {
    title: "HCF - LCM",
    pathname: "/conversion",
    id: "hcf_lcm"
  },
  {
    title: "Infix - Prefix - Postfix",
    pathname: "/conversion",
    id: "infix_prefix_postfix"
  },
  {
    title: "Weight Convertor",
    pathname: "/conversion",
    id: "weight_convertor"
  },
  {
    title: "Temperature Convertor",
    pathname: "/conversion",
    id: "temperature_convertor"
  },
  {
    title: "Length Convertor",
    pathname: "/conversion",
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
  </>
);

export default ConversionRoutes;
