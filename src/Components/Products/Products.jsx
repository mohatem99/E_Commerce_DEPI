import React from "react";
import Product from "./Product";
function Products({ products }) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {products.map((product, index) => {
          return (
            <div key={index} className="flex flex-col h-full">
              <Product product={product} key={product.id} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
