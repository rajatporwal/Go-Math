import React from 'react';
import { notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const SmileyFace = <SmileOutlined style={{ color: '#108ee9' }} />;
const SadFace = <SmileOutlined style={{ color: 'red' }} rotate={180} />;
const Banner = (msg, desc, err = false) => {
  notification.open({
    message: msg,
    description: desc,
    icon: err ? SadFace : SmileyFace,
  });
};

export default Banner;
