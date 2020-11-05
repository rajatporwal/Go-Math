import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import questionsConfig from "../../config/questionsConfig";
import { Table, Switch, Space, Checkbox } from "antd";
import { HOME_ROUTES } from "../Home/index";

const Questions = () => {
  const [border, setBorder] = useState(false);
  const [showIndex, setShowIndex] = useState(false);
  const [queCategory, setQueCategory] = useState([]);
  const dispatch = useDispatch();

  const addIndex = [
    {
      title: "Index",
      dataIndex: "index",
      key: "index",
      width: 10
    }
  ];

  const columns = [
    {
      title: "Description",
      dataIndex: "question",
      key: "question",
      width: 500
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      width: 50,
      render: (text) => (
        <Link
          active
          to={{
            pathname: "/questions",
            hash: text
          }}
          smooth
        >
          here
        </Link>
      )
    }
  ];

  useEffect(() => {
    dispatch({ type: "SIDE_BAR_OPTIONS", value: HOME_ROUTES });
  });

  const onCategoryChange = (type) => {
    if (queCategory.indexOf(type) === -1) {
      queCategory.push(type);
    } else {
      queCategory.splice(queCategory.indexOf(type), 1);
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
      <h3>Filter Questions</h3>
      <Space align="center" style={{ marginBottom: 20, marginTop: 10 }}>
        <Checkbox onChange={() => onCategoryChange("array")}>Array</Checkbox>
        <Checkbox onChange={() => onCategoryChange("string")}>String</Checkbox>
        <Checkbox onChange={() => onCategoryChange("number")}>Number</Checkbox>
        <Checkbox onChange={() => onCategoryChange("regex")}>Regex</Checkbox>
        <Checkbox onChange={() => onCategoryChange("conversion")}>
          Conversion
        </Checkbox>
      </Space>
      <br />
      <hr />
      <Space align="center" style={{ marginBottom: 10 }}>
        Index:
        <Switch checked={showIndex} onChange={() => setShowIndex(!showIndex)} />
        Border: <Switch checked={border} onChange={() => setBorder(!border)} />
      </Space>
      <Table
        columns={showIndex ? [...addIndex, ...columns] : columns}
        dataSource={filteredData.map((d, i) => {
          d["index"] = i + 1;
          return d;
        })}
        bordered={border}
      />
      {filteredData.map((ele) => (
        <div class="javascript">
          <h2 className="m_t_50" id={ele.id}>
            {ele.question}
          </h2>
          <hr />
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
