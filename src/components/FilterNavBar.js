import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import MemoryIcon from "@mui/icons-material/Memory";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ComputerIcon from "@mui/icons-material/Computer";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
// data fichier joue le role d une base de données
export default function FilterNavBar({ data }) {
  const [open, setOpen] = React.useState(true);
  const [filter, setFilter] = React.useState("lenovo");

  const handleClick = () => {
    setOpen(!open);
  };
  // pour stocker les filtres
  const [filters, setFilters] = useState([]);

  //pour chercher le totale des produits
  const getTotalByName = (value) => {
    let sum = 0;
    // console.log("fd =", fd);
    data.forEach((item) => {
      if (item.name === value) sum += 1;
    });
    return sum;
  };
  const getTotalByPrice = (value) => {
    let sum = 0;
    // parcourir l objet data chercher le total d une valeur donnée
    data.forEach((item) => {
      if (item.name === value) sum += 1;
    });
    return sum;
  };

  // add filters to filter state
  const fs = ["lenovo", "hp", "dell"];
  const handleFilterChange = (fil) => {
    // filters.forEach((value, index) => {});
    setFilters([...filters, filter]);
    // const filtersSet = new Set(filters);
    const uniquefilters = Array.from(new Set(filters));
    alert(uniquefilters);
  };
  const handleClickFilter = (fil) => {
    var str = new String();
    //var width = parseInt(filter.length, 10) * 20;
    // var widthStr = new String(width);
    // str = str.concat(widthStr.toString(), "px");

    return (
      <Button
        sx={{
          fontSize: 10,
          height: 16,
          width: 50
        }}
        color="secondary"
        endIcon={<CloseIcon sx={{ height: 11, width: 12 }} />}
      >
        {fil}
      </Button>
    );
  };

  return (
    <Stack spacing={2} sx={{ width: 260, borderRadius: 2, marginLeft: "2px" }}>
      <List
        sx={{ width: "90%", maxWidth: 300, bgcolor: "rgb(230,255,255)" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <Stack direction="row" spacing={2}>
              <>
                {" "}
                filters :
                {filters.map((filter) => {
                  handleClickFilter(filter);
                })}
              </>
            </Stack>
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <ComputerIcon />
          </ListItemIcon>
          <ListItemText primary="Marque" />
        </ListItemButton>
        <List component="div" disablePadding>
          <ListItemButton
            id="first"
            sx={{ pl: 10 }}
            onClick={() => handleFilterChange("Dell")}
          >
            <ListItemText secondary={"Dell (" + getTotalByName("Dell") + ")"} />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 10 }}
            onClick={() => handleFilterChange("Lenovo")}
          >
            <ListItemText
              secondary={"Lenovo (" + getTotalByName("Lenovo") + ")"}
            />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 10 }}
            onClick={() => handleFilterChange("HP")}
          >
            <ListItemText secondary={"HP (" + getTotalByName("HP") + ")"} />
          </ListItemButton>
        </List>
        <ListItemButton>
          <ListItemIcon>
            <MemoryIcon />
          </ListItemIcon>
          <ListItemText primary="Processeur" />
        </ListItemButton>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText secondary="i3" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText secondary="i5" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 10 }}>
            <ListItemText secondary="i7" />
          </ListItemButton>
        </List>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Prix" style={{ fontFamily: "bold" }} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemText secondary="2000-3000" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemText secondary="3000-4000" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Stack>
  );
}
