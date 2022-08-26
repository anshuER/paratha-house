import React from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";

import image from "../../assets/images.jpeg";
import {
  addAddOn,
  additem,
  deleteitem,
  removeAddOn,
} from "../../redux/cart/cartAction";

const CheckoutItems = ({ dish }) => {
  // using redux to get the state and dispatching the actions.
  const dispatch = useDispatch();
  const addOnList = useSelector((state) => state.dataList.addOnsList);

  return (
    <div style={{ marginTop: "20px" }}>
      <Card sx={{ display: "flex", color: "inherit" }}>
        <CardMedia component="img" sx={{ width: 151 }} image={image} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h5">{dish.dish}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Price per dish:{dish.price}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton
              aria-label="remove"
              onClick={() => dispatch(deleteitem(dish))}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton aria-label="quantity">{dish.quantity}</IconButton>
            <IconButton
              aria-label="add"
              onClick={() => dispatch(additem(dish))}
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Box>
        {dish.available_addons.map((id) => {
          const found = addOnList.find((element) => element.id === id);
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pt: 10,
              }}
            >
              <Typography variant="h7">
                {found.Addon}
                {`(${found.price}/per addOn)`}
              </Typography>
              <IconButton
                aria-label="remove"
                onClick={() => dispatch(removeAddOn(found))}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton
                aria-label="add"
                variant="contained"
                onClick={() => dispatch(addAddOn(found))}
              >
                <AddIcon />
              </IconButton>
            </Box>
          );
        })}
      </Card>
    </div>
  );
};

export default CheckoutItems;
