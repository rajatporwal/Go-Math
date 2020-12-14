import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const QUESTIONS_ROUTES = [
  {
    title: "Array",
    id: "array"
  },
  {
    title: "String",
    id: "string"
  },
  {
    title: "Object",
    id: "object"
  },
  {
    title: "Number",
    id: "number"
  },
  {
    title: "Regex",
    id: "regex"
  },
  {
    title: "Conversion",
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
            pathname: "/questions",
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
