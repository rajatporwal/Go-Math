import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import JavaScriptRoutes from "./JavaScriptRoutes";
import RegexRoutes from "./RegexRoutes";
import QuestionsRoutes from "./QuestionsRoutes";
import ConversionRoutes from "./ConversionRoutes";
import DataStructureRoutes from "./DataStructureRoutes";
import ReactJsRoutes from "./ReactJsRoutes";
import MyAppsRoutes from "./MyAppsRoutes";
import Accordion from "../../common/accordion/Accordion";
import NodeJsRoutes from "./NodeJsRoutes";
import TypescriptRoutes from "./TypescriptRoutes";
import NextJsRoutes from "./NextJsRoutes";
import HtmlRoutes from "./HtmlRoutes";
import CssRoutes from "./CssRoutes";
import ReactNativeRoutes from "./ReactNativeRoutes";

export const HOME_ROUTES = [
  {
    heading: null,
    children: [
      {
        title: "Home",
        pathname: "/home",
      },
      {
        title: "JavaScript",
        pathname: "/javascript",
      },
      {
        title: "React",
        pathname: "/react",
      },
      {
        title: "Node",
        pathname: "/node",
      },
      {
        title: "Next JS",
        pathname: "/next",
      },
      {
        title: "Html",
        pathname: "/html",
      },
      {
        title: "Css",
        pathname: "/css",
      },
      {
        title: "React Native",
        pathname: "/reactnative",
      },
      {
        title: "Typescript",
        pathname: "/typescript",
      },
      {
        title: "Regex",
        pathname: "/regex",
      },
      {
        title: "Questions",
        pathname: "/questions",
      },
      {
        title: "Conversion",
        pathname: "/conversion",
      },
      {
        title: "Data Structure",
        pathname: "/ds",
      },
    ],
  },
];
const Home = () => {
  const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    dispatch({ type: "SIDE_BAR_OPTIONS", value: HOME_ROUTES });
  }, []);

  return (
    <div className="home">
      <Accordion title="My Apps" key="My Apps" content={<MyAppsRoutes />}></Accordion>
      <Accordion title="JavaScript"  key="JavaScript" content={<JavaScriptRoutes />}></Accordion>
      <Accordion title="React"  key="React" content={<ReactJsRoutes />}></Accordion>
      <Accordion title="Node"  key="Node" content={<NodeJsRoutes />}></Accordion>
      <Accordion title="Next"  key="Next" content={<NextJsRoutes />}></Accordion>
      <Accordion title="Html"  key="Html" content={<HtmlRoutes />}></Accordion>
      <Accordion title="Css"  key="Css" content={<CssRoutes />}></Accordion>
      <Accordion title="React Native"  key="ReactNative" content={<ReactNativeRoutes />}></Accordion>
      <Accordion title="Typescript"  key="Typescript" content={<TypescriptRoutes />}></Accordion>
      <Accordion title="Data Structure" key="Data Structure" content={<DataStructureRoutes />}></Accordion>
      <Accordion title="Questions"  key="Questions" content={<QuestionsRoutes />}></Accordion>
      <Accordion title="Regex"  key="Regex" content={<RegexRoutes />}></Accordion>
      <Accordion title="Conversion"  key="Conversion" content={<ConversionRoutes />}></Accordion>
    </div>
  );
};

export default Home;
