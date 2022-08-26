import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { InputLabel, Select, MenuItem, FormControl } from "@mui/material";

import CheckoutItems from "../../components/CheckoutItems";

const Checkout = () => {
  // setting range price for total
  const [rangePrice, setRangePrice] = React.useState();

  // data from the redux
  const cartItems = useSelector((state) => state.cart.cartItems);
  const addonsItems = useSelector((state) => state.cart.addonsItems);
  const distanceList = useSelector((state) => state.dataList.distanceList);

  // usage of reduce method to get the total amount
  const totalOfDishes = cartItems.reduce(
    (initial, current) => initial + current.quantity * current.price,
    0
  );
  const totalOfAddOns = addonsItems.reduce(
    (initial, current) => initial + current.quantity * current.price,
    0
  );

  // handle change in dropdown
  const handleChangeOfDistance = (event) => {
    setRangePrice(event.target.value);
  };

  return (
    <div>
      {/* Conditional rendering for cart is empty or not && for listing data */}
      {cartItems.length > 0 ? (
        <>
          {rangePrice >= 0 ? (
            <Typography
              style={{
                color: "white",
                fontFamily: "Bigelow Rules",
                fontSize: "40px",
                textAlign: "center",
              }}
            >
              GRAND TOTAL:{totalOfDishes}+{totalOfAddOns}
              {"(Add Ons)"}+{rangePrice}
              {"(Delivery charge)"}={totalOfDishes + totalOfAddOns + rangePrice}
            </Typography>
          ) : null}
          <div>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                style={{ color: "black" }}
              >
                Distance Range
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={rangePrice}
                label="Age"
                onChange={handleChangeOfDistance}
                style={{ background: "white" }}
              >
                {distanceList.map((distance) => {
                  return (
                    <MenuItem value={distance.price}>{distance.range}</MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </>
      ) : (
        <Typography
          style={{
            color: "white",
            fontFamily: "Bigelow Rules",
            fontSize: "50px",
            textAlign: "center",
          }}
        >
          Your cart is empty
        </Typography>
      )}
      {rangePrice >= 0 &&
        cartItems.map((dish) => <CheckoutItems key={dish.id} dish={dish} />)}
    </div>
  );
};

export default Checkout;
