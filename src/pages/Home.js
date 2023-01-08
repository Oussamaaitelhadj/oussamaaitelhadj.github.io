import Grid from "@mui/material/Grid";
import FilterNavBar from "../components/FilterNavBar";
import Product from "../components/Product";
import Data from "../Data";

export default function Home({ itemsCart, setItemsCart, setSelectedProduct }) {
  return (
    <>
      <Grid
        item
        sm={4}
        md={3}
        lg={3}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <FilterNavBar data={Data} />
      </Grid>
      <Grid item xs={10} sm={8} md={9} lg={9}>
        <Product
          itemsCart={itemsCart}
          setItemsCart={setItemsCart}
          products={Data}
          setSelectedProduct={setSelectedProduct}
        />
      </Grid>
    </>
  );
}
