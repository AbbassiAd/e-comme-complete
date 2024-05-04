
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice.js";
import { FaStar } from 'react-icons/fa';
import HeartIcon from "./HeartIcon.jsx";

const ProductCard2 = ({ product}) => {
  const dispatch = useDispatch();


  const handleAddToCart = (product, quantity) => {
    dispatch(addToCart({ ...product, quantity: quantity }));
    toast.success("Added to cart", {
      autoClose: 1000,
    });
  };
  return (<div className="relative flex flex-col justify-between h-[380px] bg-[#F0F0F0] border border-gray-300">
  <div className="justify-center items-center bg-[#F0F0F0]">
    <span className="absolute top-0 left-0 bg-red-700 text-white py-1 px-2 rounded-tr-lg rounded-bl-lg text-xs font-semibold tracking-wide">NEW</span>
    <Link to={`/product/${product._id}`}>
      <img className="h-[210px] w-[160px] object-contain ml-[60px] mt-[20px] mb-[10px]" src={product.images.image1} alt="product image" />
    </Link>
    <div className="px-5 pb-5">
      <Link to={`/product/${product._id}`}>
        <h3 className="text-gray-900 font-semibold text-xl tracking-tight mb-[28px]">{product.name}</h3>
      </Link>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
        <button
          className="text-white  bg-gradient-to-r from-purple-400 to-purple-700 hover:bg-purple-900 focus:ring-5 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={() => handleAddToCart(product, 1)}
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
  <div>
    <HeartIcon product={product}/>
  </div>
</div>

  );
};

export default ProductCard2;
