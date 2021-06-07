import { useMemo } from 'react';
import { ProductItem } from "./ProductItem";

type SearchResultsProps = {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishlist: (id: number) => void;
};

export function SearchResults({ results, totalPrice, onAddToWishlist }: SearchResultsProps) {
  return(
    <div>
      <h2>R$ {totalPrice}</h2>

      {results.map(product => {
        return(
          <ProductItem key={product.id} product={product} onAddToWishlist={onAddToWishlist} />
        );
      })}
    </div>
  );
}