import React, { useState } from "react";
import { AutoComplete } from "antd";
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
            <Link active to={ele.path} smooth>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{ele.title}</span>
              </div>
            </Link>
          ),
        };
      });
  };

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  return (
    <span
      style={{
        marginRight: window.matchMedia("(min-width: 500px)").matches
          ? "2rem"
          : 0,
      }}
    >
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
