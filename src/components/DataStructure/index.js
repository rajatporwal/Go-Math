import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dataStructureConfig from '../../config/dataStructureConfig';
import { Table, Checkbox } from 'antd';

const filterOptionsPublic = [
  {
    name: 'Array',
    value: 'array',
  },
  {
    name: 'String',
    value: 'string',
  },
  {
    name: 'Object',
    value: 'object',
  },
  {
    name: 'Number',
    value: 'number',
  },
  {
    name: 'Set',
    value: 'set',
  },
  {
    name: 'Map',
    value: 'map',
  },
];

const filterOptionsPrivate = [
  {
    name: 'Linked List',
    value: 'linked_list',
  },
  {
    name: 'Stack',
    value: 'stack',
  },
  {
    name: 'Queue',
    value: 'queue',
  },
  {
    name: 'BST',
    value: 'bst',
  },
];

const DataStructure = () => {
  const [filter, setFilter] = useState([]);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'SIDE_BAR_OPTIONS',
      value: dataStructureConfig(isAuthenticated),
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
      ? dataStructureConfig(isAuthenticated).filter(
          (ele) => filter.indexOf(ele.category) !== -1
        )
      : dataStructureConfig(isAuthenticated);

  return (
    <div>
      <h3>Add Filters</h3>
      <div className="que_filter">
        {filterOptionsPublic.map((ele) => (
          <div>
            <Checkbox onChange={() => onCategoryChange(ele.value)}>
              {ele.name}
            </Checkbox>
          </div>
        ))}
        {isAuthenticated &&
          filterOptionsPrivate.map((ele) => (
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
                {child.code &&
                  child.code.map((e) => (
                    <>
                      {e.title ? <p> - {e.title}</p> : null}
                      <SyntaxHighlighter
                        language="javascript"
                        style={okaidia}
                        showLineNumbers
                      >
                        {e.code}
                      </SyntaxHighlighter>
                    </>
                  ))}
              </div>
              <div>
                {child.table
                  ? child.table.map((t) => (
                      <>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: `- ${t.title}`,
                          }}
                        />
                        <Table
                          columns={t.columns}
                          dataSource={t.data.map((d, i) => {
                            d['index'] = i + 1;
                            return d;
                          })}
                          scroll={{ y: 500, x: '100vw' }}
                        />
                      </>
                    ))
                  : null}
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

export default DataStructure;
