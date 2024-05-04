import { Link } from "react-router-dom";

import FavoritesCount from "../redux/features/favorites/FavoritesCount";
import CartCount from "../redux/features/cart/CartCount";
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import ProfileMenu from "./ProfilMenue";

const Navigation = () => {
  return (
    <div className="sticky top-0 bg-[#222831] text-white w-full z-50">
      <div className="container mx-auto px-4 xl:px-12">
        <div className="sticky top-0 bg-[#222831] text-white w-full z-50">
          <div className="container mx-auto px-4 xl:px-12">
            <div className="flex justify-between items-center h-16">
              <Link className="text-3xl font-bold font-heading" to={"/"}>
                E-Shop
              </Link>
              <div className="hidden md:flex space-x-4 font-semibold font-heading">
                <Link
                  className="flex items-center px-6 py-3 text-gray-100 hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out rounded-md"
                  to={"/"}
                >
                  <span>Home</span>
                </Link>
                <Link
                  className="flex items-center px-6 py-3 text-gray-100 hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out rounded-md"
                  to={"/products"}
                >
                  <span>Products</span>
                </Link>
                <Link
                  className="flex items-center px-6 py-3 text-gray-100 hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out rounded-md"
                  to={"/service"}
                >
                  <span>Service</span>
                </Link>
                <Link
                  className="flex items-center px-6 py-3 text-gray-100 hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out rounded-md"
                  to={"/contact-us"}
                >
                  <span>Contact Us</span>
                </Link>
                <Link
                  className="flex items-center px-6 py-3 text-gray-100 hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out rounded-md"
                  to={"/about"}
                >
                  <span>About</span>
                </Link>
              </div>

            

<div className="flex items-center space-x-5">
  <Link className="flex items-center space-x-1 px-29 text-gray-600 hover:text-purple-600 transition-colors duration-300" to={"/favorites"}>
    <FaHeart className="h-6 w-6 text-gray-100" />
  
    <FavoritesCount />
  </Link>

  <Link className="flex items-center space-x-1 px-6 text-gray-600 hover:text-purple-600 transition-colors duration-300" to={"/cart"}>
    <FaShoppingCart className="h-6 w-6 text-gray-100"/>
   
    <CartCount />
  </Link>

  <div className="flex items-center space-x-2">
    <ProfileMenu />

  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
