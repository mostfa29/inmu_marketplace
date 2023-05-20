export interface Listing {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    imageURL: string;
  }

export enum VIEW_TYPES{
    GRID= 'grid_view',
    LIST= 'list_view'
}

export interface Listings{
    viewType:VIEW_TYPES;
    isOwner: boolean;
}
  
export  interface ListingsProps {
    viewType?: VIEW_TYPES
    listings?: Listing[];
    listing?: any;
    isOwner: boolean;
    onEditListing?: (listingId: string) => void;
    onDeleteListing?: (listingId: string) => void;
  }