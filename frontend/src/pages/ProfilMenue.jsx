import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/features/auth/authSlice.js";
import { RiLoginBoxFill, RiLogoutBoxRFill, RiAdminFill } from "react-icons/ri";
import { useLogoutUserMutation } from "../redux/api/userApiSlice.js";
import { FaUser, FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
const ProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [logoutUser] = useLogoutUserMutation();

  const logoutHandler = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      toast.error(error?.data?.message || error.message);
    }
  };

  return (
    <div className="relative">
      <a className="nav-link" href="#" onClick={toggleMenu}>
        <FaUserCircle className="hover:text-gray-200" size={24} />
      </a>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-xl z-10">
          <Link
            className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
            to={"/profile"}
          >
            <FaUser className="w-6 h-6 mr-2" />
            My Profile
          </Link>
          {userInfo?.isAdmin && (
            <Link
              className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
              to={"/admin"}
            >
              <FaUser className="w-6 h-6 mr-2" />
              Admin Menu
            </Link>
          )}

          <Link
            className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
            to={"/help"}
          >
            <FaQuestionCircle className="w-6 h-6 mr-2" />
            Help
          </Link>
          {!userInfo ? (
            <Link className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100" to={"/login"}>
              <RiLoginBoxFill className="w-6 h-6 mr-2" />
              Login
            </Link>
          ) : (
            <Link className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={logoutHandler}>
              <RiLogoutBoxRFill className="w-6 h-6 mr-2"/>
              Logout
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
