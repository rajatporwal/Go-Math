import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { twilight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import htmlConfig from "../../config/htmlConfig";
import { Table } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";
import { addTodo } from "../../actions/todoActions";

const HtmlComponent = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "SIDE_BAR_OPTIONS", value: htmlConfig });
  }, []);

  return (
    <div>
      {htmlConfig.map((ele) => (
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
                {isAuthenticated && (
                  <PlusCircleTwoTone
                    style={{ marginLeft: "1rem", fontSize: "2rem" }}
                    onClick={() =>
                      dispatch(
                        addTodo({
                          title: child.title,
                          category: "react",
                          hashId: child.id
                        })
                      )
                    }
                  />
                )}
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
               <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  {
                      child.img && <img src={child.img} width='80%%' alt="image"  loading="lazy" />
                  }
              </div>
              <div>
                {child.code &&
                  child.code.map((e) => (
                    <>
                      {e.title ? (
                        <p
                          dangerouslySetInnerHTML={{ __html: ` - ${e.title}` }}
                        />
                      ) : null}
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
                    ))
                  : null}
              </div>
              <div>
              {child.embededUrl &&
                    <iframe
                    title={child.title}
                    width="100%"
                    height="400"
                    src={child.embededUrl}
                    allowFullScreen="allowfullscreen"
                    allowpaymentrequest="false"
                    frameBorder="0"
                    loading="lazy"
                  ></iframe>
                  }
              </div>
              {child.note ? (
                <p
                  className="note"
                  dangerouslySetInnerHTML={{
                    __html: `Note: ${child.note}`
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

export default HtmlComponent;
