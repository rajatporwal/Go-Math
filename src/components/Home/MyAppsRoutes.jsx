import React from 'react';
import { useSelector } from "react-redux";
import TopicList from '../../common/topicList/topicList';

const MyAppRoutes = () => {
  const appsConfig = useSelector((state) => state.appReducer.appsConfig);

  return <TopicList list={appsConfig} />
}

export default MyAppRoutes;
