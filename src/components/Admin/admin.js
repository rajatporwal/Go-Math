import React, { useEffect } from 'react';
import { Table, Tag, Switch, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteUser } from '../../actions/adminActions';
import { setTableProps } from '../../actions/commonActions';
import { getUsersList } from '../../actions/adminActions';

const addIndex = [
  {
    title: 'Index',
    dataIndex: 'index',
    key: 'index',
    width: 10,
  },
];

const Admin = () => {
  const data = useSelector((state) => state.admin.usersList);
  const tableProps = useSelector((state) => state.appReducer.tableProps);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const dispatch = useDispatch();
  let history = useHistory();

  if (!isAuthenticated && !isAdmin) {
    history.push('/home');
  }

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      width: 155,
      render: (ele) => {
        return (
          <>
            {!ele.userRole.includes('admin') && (
              <Tag
                color="red"
                key="delete"
                style={{ cursor: 'pointer' }}
                onClick={() => dispatch(deleteUser(ele.id))}
              >
                Delete
              </Tag>
            )}
          </>
        );
      },
    },
  ];

  const addLink = data.map((item, i) => ({
    ...item,
    index: i + 1,
    action: { id: item.id, userRole: item.userRole },
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

export default Admin;
