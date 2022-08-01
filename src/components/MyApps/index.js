import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MY_APPS_CONFIG from '../../config/myAppsConfig';
import { Checkbox } from 'antd';

const filterOptions = [
  {
    name: 'React',
    value: 'react',
  },
  {
    name: 'Html & Css',
    value: 'html-css',
  },
];

const MyApps = () => {
  const [filter, setFilter] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'SIDE_BAR_OPTIONS',
      value: MY_APPS_CONFIG,
    });
  });

  const onCategoryChange = (type) => {
    if (filter.indexOf(type) === -1) {
      filter.push(type);
    } else {
      filter.splice(filter.indexOf(type), 1);
    }
    setFilter([...filter]);
  };

  const filteredData =
    filter.length > 0
      ? MY_APPS_CONFIG.filter(
          (ele) => filter.indexOf(ele.category) !== -1
        )
      : MY_APPS_CONFIG;

  return (
    <div>
      <h3>Add Filters</h3>
      <div className="que_filter">
        {filterOptions.map((ele) => (
          <div>
            <Checkbox onChange={() => onCategoryChange(ele.value)}>
              {ele.name}
            </Checkbox>
          </div>
        ))}
      </div>
      <br />
      {filteredData.map((ele) => (
        <>
          <h1 className="m-t-20">{ele.heading}</h1>
          <hr />
          {ele.children.map((child) => (
            <div className="javascript">
              <h2
                className="heading_3"
                refs={child.id}
                id={child.id}
                name={child.id}
              >
                {child.title}
              </h2>
              {child.description ? (
                <p dangerouslySetInnerHTML={{ __html: child.description }} />
              ) : null}
              {child.list ? (
                <ul>
                  {child.list.map((v) => (
                    <li dangerouslySetInnerHTML={{ __html: v }} />
                  ))}
                </ul>
              ) : null}
              <div>
                {child.embededUrl &&
                    <iframe
                    title={child.title}
                    width="100%"
                    height="400"
                    src={child.embededUrl}
                    allowfullscreen="allowfullscreen"
                    allowpaymentrequest
                    frameborder="0"
                  ></iframe>
                  }
              </div>
              {child.note ? (
                <p
                  className="note"
                  dangerouslySetInnerHTML={{
                    __html: `Note: ${child.note}`,
                  }}
                />
              ) : null}
            </div>
          ))}
        </>
      ))}
    </div>
  );
};

export default MyApps;
