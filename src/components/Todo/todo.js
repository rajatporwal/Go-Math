import React, { useEffect } from 'react';
import { Table, Tag, Switch, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { getTodos, deleteTodo } from '../../actions/todoActions';
import { setTableProps } from '../../actions/commonActions';

const addIndex = [
  {
    title: 'Index',
    dataIndex: 'index',
    key: 'index',
    width: 10,
  },
];

const Todo = () => {
  const data = useSelector((state) => state.todo.getTodos);
  const tableProps = useSelector((state) => state.appReducer.tableProps);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (!isAuthenticated) {
      history.push('/home');
      return;
    }
    dispatch(getTodos());
  }, [dispatch, isAuthenticated, history]);

  const columns = [
    {
      title: 'Todo',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: 155,
      render: (ele) => {
        return (
          <>
            <Tag color={'geekblue'} key="visit">
              <Link
                active
                to={{
                  pathname: ele.category,
                  hash: ele.hashId,
                }}
                smooth
              >
                visit
              </Link>
            </Tag>
            <Tag
              color="red"
              key="delete"
              style={{ cursor: 'pointer' }}
              onClick={() => dispatch(deleteTodo(ele.id))}
            >
              Delete
            </Tag>
          </>
        );
      },
    },
  ];

  const addLink = data.map((item, i) => ({
    ...item,
    index: i + 1,
    action: { id: item._id, category: item.category, hashId: item.hashId },
  }));

  return (
    <div className="javascript">
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
      {addLink.length > 0 && (
        <Table
          columns={tableProps.showIndex ? [...addIndex, ...columns] : columns}
          dataSource={addLink}
          bordered={tableProps.showBorder}
        />
      )}
    </div>
  );
};

export default Todo;
