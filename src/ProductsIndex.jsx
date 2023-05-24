export function ProductsIndex(props) {
  // return (
  //   <div id="products-index">
  //     <div className="row">
  //       <div className="col-sm-6 mb-3 mb-sm-0">
  //         <div className="card">
  //           <div className="card-body">
  //             <h5 className="card-title">Special title treatment</h5>
  //             <p className="card-text">
  //               With supporting text below as a natural lead-in to additional
  //               content.
  //             </p>
  //             <a href="#" className="btn btn-primary">
  //               Go somewhere
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="col-sm-6">
  //         <div className="card">
  //           <div className="card-body">
  //             <h5 className="card-title">Special title treatment</h5>
  //             <p className="card-text">
  //               With supporting text below as a natural lead-in to additional
  //               content.
  //             </p>
  //             <a href="#" className="btn btn-primary">
  //               Go somewhere
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  {
    props.products.map((product) => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>price: {product.price}</p>
        <p>description: {product.description}</p>
        <button onClick={() => props.onShowProduct(product)}>More info</button>
      </div>
    ));
  }
}
