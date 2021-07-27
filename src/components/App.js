import React, { useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {

  const [imageContainer, setImageContainer] = useState([])
  const [search, setSearch] = useState("");

  useEffect(() => {
  
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(setImageContainer)
  }, [])


  function deleteItem(id) {
    const updatedItem = imageContainer.filter(items => items.id !== id)
    setImageContainer(updatedItem)
}

  
  const displayedListings = imageContainer.filter((listing) =>
  listing.description.toLowerCase().includes(search.toLowerCase())
);
  
  
  
  function sortItem(){
    console.log("connected!")
    let cloneTheData =[...imageContainer];
    console.log(cloneTheData)
    const sortedList = cloneTheData.sort((a, b) =>{
      let currentLocation = a.location;
      let nextLocation = b.location;

      if (currentLocation < nextLocation) return -1
      if (currentLocation > nextLocation) return 1
      return 0
    })
    setImageContainer(sortedList)
  }





  return (
    <div className="app">
      <Header onSearch={setSearch} itemInfo={sortItem}/>

      <ListingsContainer listings={displayedListings} onDeleteItem={deleteItem}/>
    </div>
  );
}

export default App;
