import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import cssConfig from "../../config/cssConfig";
import TopicDetails from "../../common/topicDetails/TopicDetails";

const CssComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "SIDE_BAR_OPTIONS", value: cssConfig });
  }, []);

  return (
    <TopicDetails config={cssConfig} />
  );
};

export default CssComponent;
