import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function Product({
  products,
  itemsCart,
  setItemsCart,
  setSelectedProduct
}) {
  const addToCart = (product) => {
    setItemsCart([...itemsCart, product]);
  };

  const handleSelectedProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        flex: 1,
        alignItems: "center",
        gap: "0.2rem",
        margin: 0
      }}
    >
      {products.map((product) => (
        <Card sx={{ maxWidth: 270 }}>
          <Link to="/DisplayProductInfo">
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.name}
              onClick={() => handleSelectedProduct(product)}
            />
          </Link>
          <CardContent sx={{ height: "250px", padding: "8px" }}>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              {product.description}
            </Typography>
          </CardContent>

          <CardActions>
            <Button onClick={() => addToCart(product)} size="small">
              add to cart
            </Button>
            <Button size="small">quantité</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
