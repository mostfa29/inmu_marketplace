import React, { useState } from 'react';
import SearchListings from '../../components/common/searchListings/Searchlistings';
import Listings from '../../components/common/listings/Listings';
import { Listing, VIEW_TYPES } from '../../components/common/listings/types';

const listings_b: Listing[] = [
  {
    id: "1",
    title: "Product 1",
    description: "This is the description for Product 1.",
    price: 10.99,
    category: "Category 1",
    imageURL: "https://example.com/image1.jpg",
  },
  {
    id: "2",
    title: "Product 2",
    description: "This is the description for Product 2.",
    price: 19.99,
    category: "Category 2",
    imageURL: "https://example.com/image2.jpg",
  },
  {
    id: "3",
    title: "Product 3",
    description: "This is the description for Product 3.",
    price: 7.99,
    category: "Category 1",
    imageURL: "https://example.com/image3.jpg",
  },
  // Add more dummy data items as needed
];

const Listing_a:Listing[]=[]

//ToDO: create prooducts backend logic
//ToDo; create api that retrieve product listings
const Marketplace = () => {
  const [listings, setListings] = useState(Listing_a)
  
  const [viewType, setViewType] = useState(VIEW_TYPES.GRID);

  const handleViewTypeChange = (newViewType:VIEW_TYPES) => {
    setViewType(newViewType);
  };

  setTimeout(() => {  setListings(()=> listings_b) }, 2000);

  return (
    <div>
      <SearchListings onViewTypeChange={handleViewTypeChange} />
      <Listings viewType={viewType} isOwner={false} listings={listings} />
    </div>
  );
};

export default Marketplace;
