import * as React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Dialog from "@mui/material/Dialog";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  }
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[20]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

export default function BasicModal({
  openModal,
  itemsCart = [],
  handleCloseM,
  setItemsCart
}) {
  let items = [...new Set(itemsCart)];

  const [quantity, setQuantity] = React.useState([]);
  const gettotalQuantity = (productId) => {
    return quantity.filter((id) => id === productId).length + 1;
  };
  const addQuantity = (productId) => {
    setQuantity([...quantity, productId]);
  };

  const reduceQuantity = (productId) => {
    let index = quantity.indexOf(productId);
    if (index > -1) {
      quantity.splice(index, 1);
    }
    setQuantity([...quantity]);
  };

  const deleteProduct = (productId) => {
    const newProducts = items.splice(
      items.findIndex((p) => p.id === productId),
      1
    );
    console.log(newProducts);
    setItemsCart(items);
    console.log(itemsCart);
  };

  return (
    <BootstrapDialog
      onClose={handleCloseM}
      sx={{ minWidth: "500px" }}
      open={openModal}
    >
      {items.length ? (
        <>
          <BootstrapDialogTitle onClose={handleCloseM}>
            Your Shopping Cart :
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <TableContainer>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">
                        <IconButton>
                          <RemoveIcon onClick={() => reduceQuantity(row.id)} />
                        </IconButton>
                        <TextField
                          sx={{ width: 50 }}
                          value={gettotalQuantity(row.id)}
                        />
                        <IconButton onClick={() => addQuantity(row.id)}>
                          <AddIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <IconButton
                          aria-label="delete"
                          size="large"
                          sx={{ color: "#9e4141" }}
                          onClick={() => deleteProduct(row.id)}
                        >
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleCloseM}>
              Proceed to Payment
            </Button>
          </DialogActions>
        </>
      ) : (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">
            <AlertTitle>Shoping Cart is empty:</AlertTitle>
            Add products to your — <strong>Shoping Cart!</strong>
          </Alert>
        </Stack>
      )}
    </BootstrapDialog>
  );
}
