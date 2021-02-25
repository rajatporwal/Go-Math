import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import questionsConfig from '../../config/questionsConfig';
import { Checkbox, Table, Switch, Space } from 'antd';
import { HOME_ROUTES } from '../Home/index';
import { setTableProps } from '../../actions/commonActions';

const Questions = () => {
  const [queCategory, setQueCategory] = useState([]);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const tableProps = useSelector((state) => state.appReducer.tableProps);
  const dispatch = useDispatch();
  let history = useHistory();
  const addIndex = [
    {
      title: 'Index',
      dataIndex: 'index',
      key: 'index',
      width: 10,
    },
  ];

  const columns = [
    {
      title: 'Description',
      dataIndex: 'question',
      key: 'question',
      width: 500,
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      width: 50,
      render: (text) => (
        <Link
          active
          to={{
            pathname: '/questions',
            hash: text,
          }}
          smooth
        >
          here
        </Link>
      ),
    },
  ];

  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/home');
      return;
    }
    dispatch({ type: 'SIDE_BAR_OPTIONS', value: HOME_ROUTES });
    const getHash = window.location.hash
      .replace('#/questions#', '')
      .replace('#/questions', '');
    setQueCategory(getHash ? [getHash] : []);
  }, [history, isAuthenticated, dispatch]);

  const onCategoryChange = (type) => {
    if (queCategory.includes(type)) {
      queCategory.splice(queCategory.indexOf(type), 1);
    } else {
      queCategory.push(type);
    }
    setQueCategory([...queCategory]);
  };

  const filteredData =
    queCategory.length > 0
      ? questionsConfig.filter((ele) =>
          ele.category.some((element) => queCategory.includes(element))
        )
      : questionsConfig;

  return (
    <div>
      <h3>Add Filters</h3>
      <div className="que_filter">
        <div>
          <Checkbox
            onChange={() => onCategoryChange('array')}
            checked={queCategory.includes('array')}
          >
            Array
          </Checkbox>
        </div>
        <div>
          <Checkbox
            onChange={() => onCategoryChange('string')}
            checked={queCategory.includes('string')}
          >
            String
          </Checkbox>
        </div>
        <div>
          <Checkbox
            onChange={() => onCategoryChange('number')}
            checked={queCategory.includes('number')}
          >
            Number
          </Checkbox>
        </div>
        <div>
          <Checkbox
            onChange={() => onCategoryChange('regex')}
            checked={queCategory.includes('regex')}
          >
            Regex
          </Checkbox>
        </div>
        <div>
          <Checkbox
            onChange={() => onCategoryChange('conversion')}
            checked={queCategory.includes('conversion')}
          >
            Conversion
          </Checkbox>
        </div>
        <div>
          <Checkbox
            onChange={() => onCategoryChange('javascript')}
            checked={queCategory.includes('javascript')}
          >
            Javascript
          </Checkbox>
        </div>
        <div>
          <Checkbox
            onChange={() => onCategoryChange('object')}
            checked={queCategory.includes('object')}
          >
            Object
          </Checkbox>
        </div>
        <div>
          <Checkbox
            onChange={() => onCategoryChange('x-or')}
            checked={queCategory.includes('x-or')}
          >
            X-OR
          </Checkbox>
        </div>
        <div>
          <Checkbox
            onChange={() => onCategoryChange('linked_list')}
            checked={queCategory.includes('linked_list')}
          >
            Linked List
          </Checkbox>
        </div>
      </div>
      <br />
      <hr />
      <Space align="center" style={{ marginBottom: 10 }}>
        Index:
        <Switch
          checked={tableProps.showIndex}
          onChange={() =>
            dispatch(
              setTableProps({ ...tableProps, showIndex: !tableProps.showIndex })
            )
          }
        />
        Border:{' '}
        <Switch
          checked={tableProps.showBorder}
          onChange={() =>
            dispatch(
              setTableProps({
                ...tableProps,
                showBorder: !tableProps.showBorder,
              })
            )
          }
        />
      </Space>
      <Table
        columns={tableProps.showIndex ? [...addIndex, ...columns] : columns}
        dataSource={filteredData.map((d, i) => {
          d['index'] = i + 1;
          return d;
        })}
        bordered={tableProps.showBorder}
      />
      {filteredData.map((ele) => (
        <div class="javascript">
          <h2 className="m_t_50" id={ele.id}>
            {ele.question}
          </h2>
          <hr />
          {ele.directions ? (
            <p dangerouslySetInnerHTML={{ __html: ele.directions }} />
          ) : null}
          {ele.solution.map((s, i) => (
            <>
              {s.title ? (
                <p className="m_t_10">
                  <b>{i + 1}. &nbsp;</b>
                  {s.title}
                </p>
              ) : null}
              <SyntaxHighlighter
                language="javascript"
                style={okaidia}
                showLineNumbers
              >
                {s.code}
              </SyntaxHighlighter>
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Questions;
