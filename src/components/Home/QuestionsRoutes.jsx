import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const QUESTIONS_ROUTES = [
  {
    title: "Array",
    pathname: "/questions",
    id: "array"
  },
  {
    title: "String",
    pathname: "/questions",
    id: "string"
  },
  {
    title: "Object",
    pathname: "/questions",
    id: "object"
  },
  {
    title: "Number",
    pathname: "/questions",
    id: "number"
  },
  {
    title: "Regex",
    pathname: "/questions",
    id: "regex"
  },
  {
    title: "Conversion",
    pathname: "/questions",
    id: "conversion"
  }
];

const QuestionsRoutes = () => (
  <ul className="home__list">
    {QUESTIONS_ROUTES.map((r) => (
      <li>
        <Link
          active
          to={{
            pathname: r.pathname,
            hash: r.id
          }}
          smooth
        >
          {r.title}
        </Link>
      </li>
    ))}
  </ul>
);

export default QuestionsRoutes;
