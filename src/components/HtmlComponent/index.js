import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import htmlConfig from "../../config/htmlConfig";
import TopicDetails from "../../common/topicDetails/TopicDetails";

const HtmlComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "SIDE_BAR_OPTIONS", value: htmlConfig });
  }, []);

  return (
    <TopicDetails config={htmlConfig} />
  );
};

export default HtmlComponent;
