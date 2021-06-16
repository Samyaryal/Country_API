import React, { useState} from 'react';
import { useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
//import EmailIcon from '@material-ui/icons/Email';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from '@material-ui/core/IconButton';
import CartItem from './CartItem';
import Search from './Search';
import Button from './Button';
const useStyles = makeStyles(() => ({
  favcontainer: {
    position: 'relative'
  },
  cartCount: {
    position: 'absolute',
    top: '0',
    fontSize: 17,
    color: '#095BE3',
    right: 12,
    fontWeight: 600
  },
}));

const Nav = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  const [drawer, setDrawer] = useState(false); 

  const openDrawer = () => {
    setDrawer(true);
  };
  const closeDrawer = () => {
    setDrawer(false);
  };

  const classes = useStyles();
  return (
    <>
      <div>
        <div className="header">
          <h1>CountryList App </h1>
        </div>
        <div className="nav-tabs">
          <Search />
          <Button />
            <div className={classes.favcontainer}>
              <IconButton onClick={openDrawer}>
                <ShoppingCartIcon className="icon"/>
              </IconButton>
              <span className={classes.cartCount}>
                {cartItems.length > 0 && cartItems.length}
              </span>
            </div>
        </div>
        <CartItem open={drawer} onClose={closeDrawer} />
      </div>
    </>
  );
};

export default Nav;