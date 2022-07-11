import React from "react";
import { useTransition } from "react";
import { useState } from "react";
import SearchResults from "./SearchResults";

export const FilterTransition = ({ data }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    startTransition(() => {
      setSearchValue(e.target.value);
    });
  };

  return (
    <div>
      <input
        placeholder="Search..."
        onChange={handleChange}
        type="text"
        value={searchValue}
      />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <SearchResults data={data} searchValue={searchValue} />
      )}
    </div>
  );
};
