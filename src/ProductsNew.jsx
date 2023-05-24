import { useState, useEffect } from "react";
import axios from "axios";

const handleSubmit = (event) => {
  event.preventDefault();
  const params = new FormData(event.target);
  props.onCreateProduct(params, () => event.target.reset());
};
export function ProductsNew(props) {
  const [suppliers, setSuppliers] = useState([]);

  const getSuppliers = () => {
    console.log("getting suppliers");
    axios.get("http://localhost:3000/suppliers.json").then((response) => {
      console.log(response.data);
      setSuppliers(response.data);
    });
  };
  useEffect(getSuppliers, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handling submit");
    return (
      <div>
        <h1>New Product</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Name: <input name="name" type="text" />
          </div>
          <div>
            Price: <input name="price" type="integer" />
          </div>
          <div>
            Description: <input name="description" type="text" />
          </div>
          <select name="supplier_id">
            {suppliers.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </option>
            ))}
          </select>
          <br />
          <br />
          <button type="submit">Create Product</button>
        </form>
      </div>
    );
  };
}
