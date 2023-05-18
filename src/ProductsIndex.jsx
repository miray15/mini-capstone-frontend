export function ProductsIndex(props) {
  return (
    <div>
      <h1>All products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>price: {product.price}</p>
          <p>description: {product.description}</p>
          <button onClick={() => props.onShowProduct(product)}>
            More info
          </button>
        </div>
      ))}
    </div>
  );
}
