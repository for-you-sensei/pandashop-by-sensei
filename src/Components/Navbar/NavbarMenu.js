import React from "react";
import "./NavbarMenu.css";
import { NavLink } from "react-router-dom";
import { Drawer, List, ListItemButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { acMenu } from "../../Redux/MenuButton";

export function NavbarMenu() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);

  const links = [
    {
      id: 0,
      name: "New",
      link: "/new",
    },
    {
      id: 1,
      name: `For${" "}Men`,
      link: "/for_men",
    },
    {
      id: 2,
      name: `For${" "}Women`,
      link: "/for_women",
    },
    {
      id: 3,
      name: `For${" "}Girls`,
      link: "/for_girls",
    },
    {
      id: 4,
      name: `For${" "}child`,
      link: "/contact",
    },
  ];

  return (
    <div id="navbar-menu">
      <Drawer
        open={menu}
        onClose={() => {
          dispatch(acMenu(!menu));
        }}
        anchor="left"
      >
        <List id="List" className="drawer">
          {links.map((item) => {
            return (
              <NavLink to={item.link} key={item.id}>
                <ListItemButton
                  onClick={() => {
                    dispatch(acMenu(!menu));
                    window.scrollTo(0, 0);
                  }}
                  className="drawer-text"
                >
                  {item.name}
                </ListItemButton>
              </NavLink>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
}
