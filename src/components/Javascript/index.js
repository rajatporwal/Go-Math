import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import javaScriptConfig from "../../config/javaScriptConfig";
import { Table } from "antd";
import { PlusCircleTwoTone } from '@ant-design/icons';
import { addTodo } from "../../actions/todoActions";
import { SIDE_BAR_OPTIONS } from "../../actions/types";

const JavaScript = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: SIDE_BAR_OPTIONS , value: javaScriptConfig });
  });

  return (
    <div>
      {javaScriptConfig.map((ele) => (
        <>
          <h1 className="heading_1">{ele.heading}</h1>
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
                {
isAuthenticated &&
                  <PlusCircleTwoTone
                  style={{ marginLeft: '1rem', fontSize: '2rem' }}
                  onClick={() =>  dispatch(addTodo({title: child.title, category: 'javascript', hashId: child.id }))}
                  />
                }
              </h2>
              {child.description ? (
                <p dangerouslySetInnerHTML={{ __html: child.description }} />
              ) : null}
              {child.list && (
                <ul>
                  {child.list.map((v) => (
                    <li dangerouslySetInnerHTML={{ __html: v }} />
                  ))}
                </ul>
              )}
              <div>
                {child.code &&
                  child.code.map((e) => (
                    <>
                      {e.title ? <p> - {e.title}</p> : null}
                      {e.code && (
                        <SyntaxHighlighter
                          language="javascript"
                          style={okaidia}
                          showLineNumbers
                        >
                          {e.code}
                        </SyntaxHighlighter>
                      )}
                    </>
                  ))}
              </div>
              <div>
                {child.table &&
                  child.table.map((t) => (
                    <>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: `- ${t.title}`
                        }}
                      />
                      <Table
                        columns={t.columns}
                        dataSource={t.data.map((d, i) => {
                          d["index"] = i + 1;
                          return d;
                        })}
                        scroll={{ y: 500, x: "100vw" }}
                      />
                    </>
                  ))}
              </div>
              {child.note && (
                <p
                  className="note"
                  dangerouslySetInnerHTML={{
                    __html: `Note: ${child.note}`
                  }}
                />
              )}
            </div>
          ))}
        </>
      ))}
    </div>
  );
};

export default JavaScript;