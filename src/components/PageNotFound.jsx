import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const pageNotFound = () => (
  <div style={{ display: 'grid', alignItems: 'center' }}>
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Button type='primary'>
          <Link to='/home'>Back Home</Link>
        </Button>
      }
    />
  </div>
);

export default pageNotFound;
