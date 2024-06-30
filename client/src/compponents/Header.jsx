import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { Menu } from "@mui/icons-material";
import Logo from "../assets/newslogo.png";

const StyledHeader = styled(AppBar)`
  background: #fff;
  height: 70px;
`;

const MenuIcon = styled(Menu)`
  color: #000;
`;

const Image = styled("img")({
  height: 60,
  margin: "auto",
});

const Header = () => {
  return (
    <div>
      <StyledHeader position="static">
        <Toolbar>
          <MenuIcon />
          <Image src={Logo} alt="Logo" />
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Header;
