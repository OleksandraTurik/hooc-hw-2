import React, { useState } from "react";
import { useDeferredValue } from "react";
import SearchResults from "./SearchResults";

export const FilterDeferred = ({ data }) => {
  const [searchValue, setSearchValue] = useState("");
  const deferredSearch = useDeferredValue(searchValue);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <input
        placeholder="Search..."
        onChange={handleChange}
        type="text"
        value={searchValue}
      />
      <SearchResults data={data} searchValue={deferredSearch} />
    </div>
  );
};
