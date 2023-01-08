import React, { useState } from "react";
import DrawerAppBar from "./components/DrawerAppBar";
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import DealsOfTheDay from "./pages/DealsOfTheDay";
import Grid from "@mui/material/Grid";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DisplayProductInfo from "./components/DisplayProductInfo";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [itemsCart, setItemsCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Grid item xs={12}>
                    <DrawerAppBar
                      window={window.document.body}
                      itemsCart={itemsCart}
                      setItemsCart={setItemsCart}
                    />
                  </Grid>
                  <Home
                    itemsCart={itemsCart}
                    setItemsCart={setItemsCart}
                    setSelectedProduct={setSelectedProduct}
                  />
                </>
              }
            />
            <Route
              path="/Contact"
              element={
                <>
                  <Grid item xs={12}>
                    <DrawerAppBar
                      window={window.document.body}
                      itemsCart={itemsCart}
                      setItemsCart={setItemsCart}
                    />
                  </Grid>
                  <Contact />
                </>
              }
            />
            <Route
              path="/About"
              element={
                <>
                  <Grid item xs={12}>
                    <DrawerAppBar
                      window={window.document.body}
                      itemsCart={itemsCart}
                      setItemsCart={setItemsCart}
                    />
                  </Grid>
                  <About />
                </>
              }
            />
            <Route path="/DealsOfTheDay" element={
            <>
                  <Grid item xs={12}>
                    <DrawerAppBar
                      window={window.document.body}
                      itemsCart={itemsCart}
                      setItemsCart={setItemsCart}
                    />
                  </Grid>
            <DealsOfTheDay />
            </>} />
            <Route
              path="/DisplayProductInfo"
              element={
                <>
                  <Grid item xs={12}>
                    <DrawerAppBar
                      window={window.document.body}
                      itemsCart={itemsCart}
                      setItemsCart={setItemsCart}
                    />
                  </Grid>
                <DisplayProductInfo
                  product={selectedProduct}
                  setItemsCart={setItemsCart}
                />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </Grid>
    </Box>
  );
}
