import React from "react";
import { popularProducts } from "../../../util/Products";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  return (
    <div
      className=" bg-white rounded-lg font-poppins  px-3 py-3 w-full lg:w-3/12 hover:scale-105 duration-500
	shadow-md shadow-gray-300 dark:shadow-neutral-700 dark:bg-neutral-900"
    >
      <h1 className=" dark:text-violet-700">Popular Products</h1>
      <div className="mt-4 space-y-2">
        {popularProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}
            className="flex items-start hover:no-underline"
          >
            <div className="w-10 h-10 min-w-[40px] bg-gray-200 rounded-sm">
              <img
                className="w-full h-full object-cover rounded-sm"
                src={product.product_thumbnail}
                alt={product.product_name}
              />
            </div>
            {/*flex 1: element takes the full space of available width */}
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-500">{product.product_name}</p>
              <span
                className={`text-xs font-medium ${
                  product.product_stock === 0
                    ? "text-red-600"
                    : product.product_stock > 0 && product.product_stock <= 20
                    ? "text-orange-400"
                    : "text-green-400"
                }`}
              >
                {product.product_stock === 0
                  ? "Out of Stock"
                  : product.product_stock + " in Stock"}
              </span>
            </div>
            <h1 className="text-xs pl-1.5 text-sky-500">
              {product.product_price}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
