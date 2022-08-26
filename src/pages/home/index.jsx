import React from "react";
import ItemCard from "../../components/Card";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { set_Addons, set_distanceList } from "../../redux/data/dataActions";

const HomePage = () => {
  const [parathaDishes, setParathaDishes] = React.useState([]);
  const dispatch = useDispatch();

  // fetching the apis
  React.useEffect(() => {
    fetch("http://localhost:5000/dishes")
      .then((res) => res.json())
      .then((data) => setParathaDishes(data));

    fetch("http://localhost:5000/addons")
      .then((res) => res.json())
      .then((data) => dispatch(set_Addons(data)));

    fetch("http://localhost:5000/delivery_range")
      .then((res) => res.json())
      .then((data) => dispatch(set_distanceList(data)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Grid container spacing={3}>
        {parathaDishes.map((dish) => {
          return <ItemCard key={dish.id} dish={dish} />;
        })}
      </Grid>
    </div>
  );
};

export default HomePage;
