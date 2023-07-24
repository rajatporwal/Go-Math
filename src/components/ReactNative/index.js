import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import reactNativeConfig from "../../config/reactNativeConfig";

import TopicDetails from "../../common/topicDetails/TopicDetails";

const ReactNative = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "SIDE_BAR_OPTIONS", value: reactNativeConfig });
  }, []);

  return (
    <TopicDetails config={reactNativeConfig} />
  );
};

export default ReactNative;
