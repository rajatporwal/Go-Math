import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const QuestionsRoutes = () => (
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
);

export default QuestionsRoutes;
