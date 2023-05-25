import { useState } from "react";

export function ProductsIndex(props) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div id="products-index">
      {" "}
      <p>
        Search:{" "}
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </p>
      {props.products
        .filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.supplier && product.supplier.name}</p>
            <button
              onClick={() => {
                props.onShowProduct(product);
              }}
            >
              more info
            </button>
            <hr />
          </div>
        ))}
    </div>
  );
}
