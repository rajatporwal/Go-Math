import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import javaScriptConfig from '../../config/javaScriptConfig';
import { SIDE_BAR_OPTIONS } from '../../actions/types';
import TopicDetails from '../../common/topicDetails/TopicDetails';

const JavaScript = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: SIDE_BAR_OPTIONS, value: javaScriptConfig });
  }, []);

  return (
    <TopicDetails config={javaScriptConfig} />
  );
};

export default JavaScript;
