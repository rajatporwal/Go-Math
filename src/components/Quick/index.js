import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import quickConfig from '../../config/quickConfig';
import { SIDE_BAR_OPTIONS } from '../../actions/types';
import TopicDetails from '../../common/topicDetails/TopicDetails';

const Quick = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: SIDE_BAR_OPTIONS, value: quickConfig });
  }, []);

  return (
    <TopicDetails config={quickConfig} />
  );
};

export default Quick;
