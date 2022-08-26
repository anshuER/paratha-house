import React from "react";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";

import images from "../../assets/images.jpeg";
import { additem } from "../../redux/cart/cartAction";

const ItemCard = ({ dish }) => {
  const dispatch = useDispatch();

  return (
    <Grid item xs={12} sm={6} md={3} lg={4}>
      <Card
        sx={{
          marginLeft: "10%",
          marginRight: "10%",
          backgroundColor: "#0ccac4",
          height: "100%",
        }}
      >
        <CardMedia component="img" image={images} />
        <CardContent style={{ backgroundColor: "#0ccac4" }}>
          <Typography gutterBottom variant="h5">
            {dish.dish}
          </Typography>
          <Typography gutterBottom variant="h5">
            {dish.price}$
          </Typography>
        </CardContent>
        <CardActions
          style={{ justifyContent: "center", backgroundColor: "#0ccac4" }}
        >
          <Button
            variant="contained"
            size="medium"
            onClick={() => dispatch(additem(dish))}
          >
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ItemCard;
