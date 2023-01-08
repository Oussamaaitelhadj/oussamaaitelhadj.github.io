import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Data from "../Data";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function DisplayProductInfo({ product, setItemsCart }) {
  // remove action area to disable clickable

  console.log(product.image);
  const [selectedImage, setSelectedImage] = React.useState(product.image);
  const [quantity, setQuantity] = React.useState(1);
  const [selected, setSelected] = useState(true);

  const changeSlectedImage = (image) => {
    setSelectedImage(image);
  };
  const changeQuantity = () => {
    setQuantity(quantity + 1);
  };
  const reducechangeQuantity = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handlequantity = (event) => {
    const qty = event.target.value;
    setQuantity(Number(qty));
  };
  //changer le button d ajout par supprimer
  const handleSlected = (product) => {
    setSelected(!selected);
    setItemsCart(product);
  };
  return (
    <Box component="div">
      <Grid container spacing={2} sx={{ margin: 1 }}>
        <Grid xs={12} lg={4}>
          <Card sx={{ maxWidth: 345, boxShadow: "10px 10px 20px grey" }}>
            <CardMedia
              component="img"
              height="250"
              image={selectedImage}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Stack direction="row" spacing={2}>
                  {Data.map((product) => {
                    return (
                      <img
                        style={{
                          borderRadius: 2,
                          cursor: "pointer",
                          border: "1px solid black"
                        }}
                        height="60"
                        width="60"
                        src={product.image}
                        alt={product.name}
                        onClick={() => changeSlectedImage(product.image)}
                      />
                    );
                  })}
                </Stack>
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Button
                variant="contained"
                color="error"
                sx={{ marginLeft: 5 }}
                onClick={reducechangeQuantity}
              >
                <RemoveIcon />
              </Button>
              <TextField
                size="small"
                onChange={(event) => handlequantity(event)}
                value={quantity}
                sx={{ input: { textAlign: "center" }, margin: 1 }}
              ></TextField>
              <Button
                variant="contained"
                color="success"
                sx={{ marginRight: 5 }}
                onClick={changeQuantity}
              >
                <AddIcon />
              </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "right", margin: 1 }}>
              {selected ? (
                <Button
                  variant="contained"
                  sx={{ marginLeft: 5 }}
                  onClick={() => handleSlected(product)}
                  startIcon={<AddIcon />}
                >
                  ajouter au panier
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  sx={{ marginLeft: 5 }}
                  onClick={handleSlected}
                  startIcon={<RemoveIcon />}
                >
                  annuler le produit
                </Button>
              )}
            </Box>
          </Card>
        </Grid>
        <Grid xs={12} lg={8} sx={{}}>
          <h3>description</h3>
          {product.description}
        </Grid>
      </Grid>
    </Box>
  );
}
