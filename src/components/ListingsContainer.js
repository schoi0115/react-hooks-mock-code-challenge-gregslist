import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteItem}) {


  return (
    <main>
      <ul className="cards">
        {
          listings.map((listing) => (
            <ListingCard 
              listing={listing}
              onDeleteItem={onDeleteItem}
              />
          ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
