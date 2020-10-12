import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";
import { Collapse } from "antd";
import javaScriptConfig from "../../config/javaScriptConfig";
import regexConfig from "../../config/regexConfig";
const { Panel } = Collapse;

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "SHOW_MENU", value: false });
    dispatch({ type: "SHOW_SIDE_BAR", value: false });
  });
  return (
    <div className="home">
      <Collapse accordion>
        <Panel header="JavaScript" key="javascript">
          {javaScriptConfig.map((js) => (
            <>
              <h4>{js.heading}</h4>
              <ul className="home__list">
                {js.children.map((child) => (
                  <li>
                    <Link
                      active
                      to={{
                        pathname: js.pathname,
                        hash: child.id
                      }}
                      smooth
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </Panel>
      </Collapse>
      <Collapse accordion>
        <Panel header="Regex" key="regex">
          {regexConfig.map((r) => (
            <>
              <h4>{r.heading}</h4>
              <ul className="home__list">
                {r.children.map((child) => (
                  <li>
                    <Link
                      active
                      to={{
                        pathname: r.pathname,
                        hash: child.id
                      }}
                      smooth
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </Panel>
      </Collapse>
      <Collapse accordion>
        <Panel header="Questions" key="3">
          <ul className="home__list">
            <li>
              <Link
                active
                to={{
                  pathname: "/questions"
                }}
                smooth
              >
                Home
              </Link>
            </li>
          </ul>
        </Panel>
      </Collapse>
      <Collapse accordion>
        <Panel header="Conversion" key="4">
          <>
            <h4>Conversion</h4>
            <ul className="home__list">
              <li>
                <Link
                  active
                  to={{
                    pathname: "/conversion/number"
                  }}
                  smooth
                >
                  Number Conversion
                </Link>
              </li>
            </ul>
          </>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Home;
