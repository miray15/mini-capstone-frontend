import { useState, useEffect } from "react";
import axios from "axios";

export function ProductsShowSeparate() {
  const [product, setProduct] = useState({});
  const getShowProduct = () => {
    console.log("getting individual recipe");
    return <div>here is products show separate</div>;
  };
  //

  axios.get("http://localhost:3000/products/8.json").then((response) => {
    console.log(response.data);
    setProduct(response.data);
  });
}

// useEffect(getShowProduct, []);
// {
//   return (
//     <div>
//       <p>name: {product.name}</p>

//       <p>price: {product.price}</p>

//       <p>description: {product.description}</p>

//       <p>Here is products show separate</p>
//     </div>
//   );
// }
