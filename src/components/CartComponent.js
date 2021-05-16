import {
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});
export default function CartComponent({ listOfItems, total }) {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h2" component="h2">
        Cart
      </Typography>
      <List>
        {listOfItems &&
          listOfItems.map((items) => {
            return (
              <ListItem key={items.id} alignItems="flex-start">
                <Card className={classes.root}>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid xs={6}>
                        <Typography
                          variant="h5"
                          component="h5"
                          color="textPrimary"
                        >
                          {items.title}
                        </Typography>
                      </Grid>
                      <Grid alignItems="flex-end" xs={6}>
                        <Typography
                          variant="h5"
                          component="h5"
                          style={{ textAlign: "end" }}
                          color="textPrimary"
                        >
                          {items.price * items.quantity}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={3} style={{ paddingTop: "2%" }}>
                      <Typography>Quantity: {items.quantity}</Typography>
                    </Grid>
                  </CardContent>
                </Card>
              </ListItem>
            );
          })}
      </List>
      <Container>
        <Grid container>
          <Grid xs={6}>
            <Typography variant="h5" component="h5" color="textPrimary">
              Total
            </Typography>
          </Grid>
          <Grid alignItems="flex-end" xs={6}>
            <Typography
              variant="h5"
              component="h5"
              style={{ textAlign: "end" }}
              color="textPrimary"
            >
              {total}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}
