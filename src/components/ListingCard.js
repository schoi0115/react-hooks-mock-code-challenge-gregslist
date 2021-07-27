import React, {useState} from "react";


function ListingCard({listing, onDeleteItem}) {

  const [favorite, setFavorite] = useState(false)

  function clickFavorit(){
    setFavorite(!favorite)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    });
    onDeleteItem(listing.id);
  }



  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt=
        {listing.description} />
      </div>
      <div className="details">
        {/* {favorite ? (
          <button className="emoji-button favorite active" onClick={clickFavorit}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={clickFavorit}>☆</button>
        )} */}

        <button className="emoji-button favorite active" onClick={clickFavorit}>{favorite ? "★" : "☆"}</button>



        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
