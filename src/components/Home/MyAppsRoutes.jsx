import React from 'react';
import { useSelector } from "react-redux";
import { HashLink as Link } from 'react-router-hash-link';

const MyAppRoutes = () => {
  const appsConfig = useSelector((state) => state.appReducer.appsConfig);

  return appsConfig.map((ds) => (
    <>
      <h4>{ds.heading}</h4>
      <ul className='home__list'>
        {ds.children.map((child) => (
          <li>
            <Link
              active
              to={{
                pathname: ds.pathname,
                hash: child.id,
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
};

export default MyAppRoutes;
