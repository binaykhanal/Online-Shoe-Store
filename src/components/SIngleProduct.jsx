import PropTypes from "prop-types";

const SingleProduct = ({ searchResult }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  py-1.5 font-poppins">
      {searchResult.map((product) => (
        <div key={product.id} className="md:flex gap-x-2 border-b border-r border-gray-300 p-2">
        <img alt={product.name} src={product.image} className=" h-12 mx-auto md:mx-0 rounded"/>
         <section className=" text-green-700 text-xs md:text-lg text-center md:text-left">
          <h1 className="text-black line-clamp-2 md:line-clamp-1 lg:line-clamp-2">{product.name}</h1>
          <p className="font-medium text-sm">NPR {product.price}</p>
          </section>
        </div>
      ))}
    </div>
  );
};

SingleProduct.propTypes = {
  searchResult: PropTypes.array.isRequired,
};

export default SingleProduct;
