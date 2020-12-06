import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import reactJsConfig from "../../config/reactJsConfig";

const ReactJsRoutes = () =>
  reactJsConfig.map((js) => (
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
  ));

export default ReactJsRoutes;
