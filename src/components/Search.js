import React, { useState } from "react";




function Search({onSearch, itemInfo}) {


  // const [sortByLocation, setsortByLocation] = useState(itemInfo)
  
  
  
  // function sortItem(){
  //   console.log("connected!")
  //   let cloneTheData =[...itemInfo];
  //   console.log(cloneTheData)
  //   const sortedList = cloneTheData.sort((a, b) =>{
  //     let currentLocation = a.location;
  //     let nextLocation = b.location;

  //     if (currentLocation < nextLocation) return -1
  //     if (currentLocation > nextLocation) return 1
  //     return 0
  //   })
  //   setsortByLocation(sortedList)
  // }




  const [search, setSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    onSearch(search)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
      <button onClick={itemInfo}>Sort by Location</button>
    </form>
    
  );
}

export default Search;
