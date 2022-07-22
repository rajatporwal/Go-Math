import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { HashLink as Link } from "react-router-hash-link";

const SearchComponent = ({ searchData }) => {
  const [options, setOptions] = useState([]);

  const searchResult = (query) => {
    return searchData
      .filter((ele) => ele?.title?.includes(query))
      .map((ele) => {
        return {
          value: ele.title,
          label: (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>
                <Link
                  active
                  to={ele.path}
                  smooth
                >
                  {ele.title}
                </Link>
              </span>
            </div>
          ),
        };
      });
  };

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  return (
    <span style={{ marginRight: "2rem" }}>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{ width: 300 }}
        options={options}
        onSearch={handleSearch}
      />
    </span>
  );
};

export default SearchComponent;
