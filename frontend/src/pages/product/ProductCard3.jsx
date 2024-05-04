import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice.js";
import { FaStar } from "react-icons/fa";
import HeartIcon from "./HeartIcon.jsx";
const ProductCard3 = ({ product }) => {
  const dispatch = useDispatch();

  
   

  const handleAddToCart = (product, quantity) => {
    dispatch(addToCart({ ...product, quantity: quantity }));
    toast.success("Added to cart", {
      autoClose: 1000,
    });
  };

  return (<>
    <div className="max-w-md w-full bg-[#F0F0F0] shadow-lg rounded-xl p-6">
      <div className="flex flex-col">
        <div className="relative h-62 w-full mb-3">
        <div>
    <HeartIcon product={product} />
    </div>
    <Link  to={`/product/${product._id}`}>
  
          <img
            className="h-[210px] w-[160px] object-contain ml-[30px] mt-[20px]"
            src={product.images.image1}
            alt="product image"
          />
            </Link>
        </div>
        <div className="flex-auto justify-evenly">
          <div className="flex flex-wrap">
            <div className="flex items-center w-full justify-between min-w-0">
              <Link
                to={`/product/${product._id}`}>
              <h2 className="text-lg mr-auto cursor-pointer text-gray-700 hover:text-purple-500 truncate">
                {product.name}
              </h2>
              </Link>
            </div>
            <div className="flex items-center mb-[30px]">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-sm ${
                    index < Math.floor(product.rating)
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                />
              ))}
              <span className="text-gray-500 ml-1">
                ({product?.numReviews} reviews)
              </span>
            </div>
          </div>
          <div className="text-xl text-black font-semibold ">
            ${product.price.toFixed(2)}
          </div>
          <div className="lg:flex py-4 text-sm text-gray-600"></div>
          <div className="flex space-x-2 text-sm font-medium justify-start">
            <button
              className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-1 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 "
              onClick={() => handleAddToCart(product, 1)}
            >
              <span>Add Cart</span>
            </button>
            <Link
            to={`/product/${product._id}`}>
            
            <button className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </button>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
   
    </>
  );
};

export default ProductCard3;
