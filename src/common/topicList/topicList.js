import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const TopicList = ({list}) =>
  list?.map((js, i) => (
    <>
      <h4 key={js?.heading + i}>{js?.heading}</h4>
      <ul key={'home__list' + i} className="home__list">
        {js?.children?.map((child, i) => (
          <li key={child.id + i}>
            <Link
              active
              to={{
                pathname: js?.pathname,
                hash: child?.id
              }}
              smooth
            >
              {child?.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  ));

export default TopicList;
