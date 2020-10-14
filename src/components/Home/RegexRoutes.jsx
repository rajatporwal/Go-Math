import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import regexConfig from "../../config/regexConfig";

const RegexRoutes = () =>
  regexConfig.map((r) => (
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
  ));

export default RegexRoutes;
