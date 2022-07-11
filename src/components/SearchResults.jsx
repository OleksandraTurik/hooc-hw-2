import React from 'react'
import { useMemo } from 'react'

const SearchResults = ({data, searchValue}) => {
  const searchData = useMemo(() => {
    return data.filter((el) => el.name.toLowerCase().includes(searchValue.toLowerCase()))
  }, [searchValue])
  return (
    <div>
      <ul>
        {searchData.map((el, index) => (
          <li key={index + Math.random()}>{el.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchResults
