import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Collapse } from "antd";
import JavaScriptRoutes from "./JavaScriptRoutes";
import RegexRoutes from "./RegexRoutes";
import QuestionsRoutes from "./QuestionsRoutes";
import ConversionRoutes from "./ConversionRoutes";
import DataStructureRoutes from "./DataStructureRoutes";
import ReactJsRoutes from "./ReactJsRoutes";
const { Panel } = Collapse;

export const HOME_ROUTES = [
  {
    heading: null,
    children: [
      {
        title: "Home",
        pathname: "/home"
      },
      {
        title: "JavaScript",
        pathname: "/javascript"
      },
      {
        title: "React",
        pathname: "/react"
      },
      {
        title: "Regex",
        pathname: "/regex"
      },
      {
        title: "Questions",
        pathname: "/questions"
      },
      {
        title: "Conversion",
        pathname: "/conversion"
      },
      {
        title: "Data Structure",
        pathname: "/ds"
      }
    ]
  }
];
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SIDE_BAR_OPTIONS", value: HOME_ROUTES });
  });

  return (
    <div className="home">
      <Collapse accordion>
        <Panel header="JavaScript" key="javascript">
          <JavaScriptRoutes />
        </Panel>
      </Collapse>
      <Collapse accordion>
        <Panel header="React" key="react">
          <ReactJsRoutes />
        </Panel>
      </Collapse>
      <Collapse accordion>
        <Panel header="Data Structure" key="ds">
          <DataStructureRoutes />
        </Panel>
      </Collapse>
      <Collapse accordion>
        <Panel header="Questions" key="questions">
          <QuestionsRoutes />
        </Panel>
      </Collapse>
      <Collapse accordion>
        <Panel header="Regex" key="regex">
          <RegexRoutes />
        </Panel>
      </Collapse>
      <Collapse accordion>
        <Panel header="Conversion" key="conversion">
          <ConversionRoutes />
        </Panel>
      </Collapse>
    </div>
  );
};

export default Home;
