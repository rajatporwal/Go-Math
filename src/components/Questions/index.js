import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import questionsConfig from "../../config/questionsConfig";
import { Table, Switch, Space } from "antd";

const Questions = () => {
  const [border, setBorder] = useState(false);
  const [showIndex, setShowIndex] = useState(false);

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

  return (
    <div>
      <Space align="center" style={{ marginBottom: 10 }}>
        Index:
        <Switch checked={showIndex} onChange={() => setShowIndex(!showIndex)} />
        Border: <Switch checked={border} onChange={() => setBorder(!border)} />
      </Space>
      <Table
        columns={showIndex ? [...addIndex, ...columns] : columns}
        dataSource={questionsConfig.map((d, i) => {
          d["index"] = i + 1;
          return d;
        })}
        bordered={border}
      />
      {questionsConfig.map((ele) => (
        <div class="javascript">
          <h2 id={ele.id}>{ele.question}</h2>
          <hr />
          {ele.solution.map((s, i) => (
            <>
              <p>
                <b>{i + 1}. &nbsp;</b>
                {s.title}
              </p>
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
