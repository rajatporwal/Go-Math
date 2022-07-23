import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import DATA_STRUCTURE_CONFIG from '../../config/dataStructureConfig';

const DataStructureRoutes = () => {
  return DATA_STRUCTURE_CONFIG.map((ds) => (
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
