import React, { useEffect } from "react";
import { Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";
import { getTodos } from "../../actions/todoActions";

const columns = [
  {
    title: "Index",
    dataIndex: "index",
    index: "index"
  },
  {
    title: "Todo",
    dataIndex: "title",
    key: "title"
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (ele) => {
      return (
        <>
          <Tag
            color={"geekblue"}
            key="visit"
            onClick={() => console.log(ele.id)}
          >
            <Link
              active
              to={{
                pathname: ele.category,
                hash: ele.hashId
              }}
              smooth
            >
              visit
            </Link>
          </Tag>
          <Tag color="red" key="delete" onClick={() => console.log(ele.id)}>
            Delete
          </Tag>
        </>
      );
    }
  }
];

const Todo = () => {
  const data = useSelector((state) => state.todo.getTodos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className="javascript">
      <Table
        columns={columns}
        dataSource={data.map((d, i) => {
          d["index"] = i + 1;
          d["action"] = d;
          return d;
        })}
      />
    </div>
  );
};

export default Todo;
