import React from "react";
import TopicList from "../../common/topicList/topicList";

export const CONVERSION_ROUTES = [{
  heading: 'Conversion',
  pathname: '/conversion',
  children: [
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
  }]
}
];

const ConversionRoutes = () => (
  <TopicList list={CONVERSION_ROUTES} />
);

export default ConversionRoutes;
