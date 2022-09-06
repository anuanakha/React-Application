import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import ButtonAdd from "./ButtonAdd";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledAppBar = styled(AppBar)({
  position: "sticky",
  backgroundColor: "black",
});

const Header = () => {
  return (
    <div>
      <StyledAppBar>
        <StyledToolbar>
          <img
            src=" https://s3-us-west-2.amazonaws.com/wwls3bucket/Frontend/logo/KIS_Logo.png"
            alt="logo"
          ></img>
          <ButtonAdd/>
        </StyledToolbar>
      </StyledAppBar>
    </div>
  );
};

export default Header;
