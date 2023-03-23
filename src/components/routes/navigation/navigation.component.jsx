import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import "./navigation.styles.scss";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  console.log("currentUser: ---> ", currentUser);
  return (
    <Fragment>
      {/* asdsa */}
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrownLogo />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className='nav-link' to='auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
