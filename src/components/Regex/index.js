import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import regexConfig from "../../config/regexConfig";
import { Table } from "antd";

const Regex = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "SIDE_BAR_OPTIONS", value: regexConfig });
  });
  return (
    <div>
      {regexConfig.map((ele) => (
        <>
          <h1>{ele.heading}</h1>
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
                      {e.title ? (
                        <ul>
                          <li dangerouslySetInnerHTML={{ __html: e.title }} />
                        </ul>
                      ) : null}
                      {e.code ? (
                        <SyntaxHighlighter
                          language="javascript"
                          style={okaidia}
                          showLineNumbers
                        >
                          {e.code}
                        </SyntaxHighlighter>
                      ) : null}
                    </>
                  ))}
              </div>
              <div>
                {child.table
                  ? child.table.map((t) => (
                      <>
                        {t.title ? (
                          <p
                            dangerouslySetInnerHTML={{
                              __html: `- ${t.title}`
                            }}
                          />
                        ) : null}
                        <Table
                          columns={t.columns}
                          dataSource={t.data.map((d, i) => {
                            d["index"] = i + 1;
                            return d;
                          })}
                          scroll={{ y: 500, x: "100vw" }}
                        />
                      </>
                    ))
                  : null}
              </div>
              {child.note ? (
                <p
                  className="note"
                  dangerouslySetInnerHTML={{ __html: `Note: ${child.note}` }}
                />
              ) : null}
            </div>
          ))}
        </>
      ))}
    </div>
  );
};

export default Regex;
