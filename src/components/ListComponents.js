import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonBox: {
    paddingTop: "2%",
    paddingBottom: "2%",
  },
}));
export default function ListComponent({
  productsList,
  cartItems,
  fetchData,
  addItem,
}) {
  const classes = useStyles();
  const history = useHistory();

  const navigateToCart = () => history.push("/cart");

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container>
      <Typography variant="h2" component="h2">
        Products
      </Typography>

      <Box className={classes.buttonBox}>
        <Button variant="contained" color="primary" onClick={navigateToCart}>
          My Cart {cartItems > 0 ? cartItems : ""}
        </Button>
      </Box>

      <GridList cellHeight={180} cols={3}>
        {productsList &&
          productsList.map(({ id, title, price, image, category }) => (
            <GridListTile key={id}>
              <img src={image} alt={title} />
              <GridListTileBar
                title={title}
                subtitle={<span>by: {category}</span>}
                actionIcon={
                  <IconButton
                    onClick={() => addItem({ id, title, price, category })}
                    aria-label={`info about ${title}`}
                  >
                    <AddIcon style={{ color: "white" }} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
      </GridList>
    </Container>
  );
}
