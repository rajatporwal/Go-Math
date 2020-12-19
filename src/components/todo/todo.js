import React from "react";
import { Table, Tag } from "antd";
import { useSelector } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";

const columns = [
  {
    title: "Index",
    dataIndex: "index",
    index: "index",
  },
  {
    title: "Todo",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (id) => {
      return (
        <>
          <Tag color={'geekblue'} key='visit' onClick={() => console.log(id)}>
            Visit
          </Tag>
          <Tag color='red' key='delete' onClick={() => console.log(id)}>
            Delete
          </Tag>
        </>
      );
    },
  },
];

const Todo = () => {
  const data = useSelector((state) => state.todo);

  return (
    <div className="javascript">
      <Table
        columns={columns}
        dataSource={data.map((d, i) => {
          d["index"] = i + 1;
          d["pathname"] = (
            <Link
              active
              to={{
                pathname: d.category,
                hash: d.child,
              }}
              smooth
            >
              click here
            </Link>
          );
          d["action"] = { id: "abc" };
          return d;
        })}
      />
    </div>
  );
};

export default Todo;