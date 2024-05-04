/* import { useParams } from "react-router";
import { useGetProductByCategorieQuery } from "../../redux/api/productApiSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Navigation from "../Navigation.jsx";
export default function ProductByCategory() {
    const { id } = useParams();

    const { data: ProductsByCategory } = useGetProductByCategorieQuery(id);

    if (!ProductsByCategory) {
        return <div>No products available for this category</div>;
    }

  
 
    
    return (
        <>
            <Navigation />
            <div className="container mx-auto">
                <div className="text-center my-8">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                        Products By Category
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {ProductsByCategory.map((product) => (
                        <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
                            <div className="flex justify-center items-center p-6 h-64">
                                <img src={product.images.image1} alt={product.name} className="h-auto w-2/3" />
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                <p className="mt-2 text-lg font-bold">${product.price} <FontAwesomeIcon icon={faShoppingCart} className="ml-1" /></p>
                                <button className=" bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded  inset-y-0 right-0" onClick={() => addToCart(product)}><FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
    
    
}
 */
import React from "react";
import { useParams } from "react-router";

import Navigation from "../Navigation.jsx";
import { toast } from "react-toastify";
import { BiShoppingBag } from "react-icons/bi";
import { useGetProductByCategorieQuery } from "../../redux/api/productApiSlice";
import HeartIcon from "./HeartIcon.jsx";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../../redux/features/cart/cartSlice.js";
import { useDispatch } from "react-redux";

export default function ProductByCategory() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { data: productsByCategory, isLoading, isError } = useGetProductByCategorieQuery(id);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching products</div>;

    if (!productsByCategory || productsByCategory.length === 0) {
        return <div>No products available for this category</div>;
    }

    const handleAddToCart = (product, quantity) => {
        dispatch(addToCart({ ...product, quantity: quantity }));
        toast.success("Added to cart", {
          autoClose: 1000,
        });
      };

    return (
        <>
           <Navigation/> 
            <div className="container mx-auto">
    <div className="text-center my-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Products By Category
        </h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {productsByCategory.map((product) => (
                        <div key={product.id} className="border rounded-lg overflow-hidden shadow-md transition duration-500 ease-in-out transform hover:scale-105">
                            <div className="flex justify-center items-center p-6 h-64 bg-gray-100">
                                <img
                                    src={product.images.image1}
                                    alt={product.name}
                                    className="h-[200px] w-[160px] object-contain"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                                <p className="mt-2 text-lg font-bold text-green-600">${product.price}</p>
                                <div className="flex items-center mb-3">
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar
                                            key={index}
                                            className={`text-sm ${
                                                index < Math.floor(product.rating)
                                                    ? "text-yellow-500"
                                                    : "text-gray-500"
                                                }`}
                                        />
                                    ))}
                                    <span className="text-gray-500 ml-1">
                                        ({product?.numReviews} avis)
                                    </span>
                                </div>
                                <button onClick={() => handleAddToCart(product, 1)} className="flex items-center justify-center h-12 w-52 bg-gray-700 text-white duration-100 hover:bg-blue-800 rounded-lg">
                                    <BiShoppingBag className="w-6 h-6 mr-2" />
                                    Ajouter au Panier
                                </button>
                            </div>
                            <HeartIcon product={product} />
                        </div>
                    ))}
                </div>
</div>

        </>
    );
}
