import React from 'react'
import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

function DetailedWeatherCard({onSearchchange}) {

    const[Search,setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchchange(searchData);
    }

  return (
    <div>
      <AsyncPaginate 
      placeholder="search for city" 
      debounceTimeout={600} 
      value={Search}
      onChange={handleOnChange}
      />
    </div>
  )
}

export default DetailedWeatherCard
