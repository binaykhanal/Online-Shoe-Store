import React from "react";

const SearchBar = ({ handleSearchChange }) => {
  return (
    <input
      type="text"
      style={{ paddingRight: "235px" }}
      className=" h-10 pl-2 w-[100%] text-black"
      placeholder="Search for products"
      onChange={(e) => {
        handleSearchChange(e.target.value);
      }}
    />
  );
};

export default SearchBar;
