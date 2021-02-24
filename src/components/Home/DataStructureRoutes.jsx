import React from 'react';
import { useSelector } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import dataStructureConfig from '../../config/dataStructureConfig';

const DataStructureRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return dataStructureConfig(isAuthenticated).map((ds) => (
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

export default DataStructureRoutes;
