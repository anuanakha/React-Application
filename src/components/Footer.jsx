import React from "react";
import {
  BottomNavigation,
  Paper,
  Typography,
  Link,
  Button,
  Icon,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import {useNavigate} from "react-router-dom";
// import './resources/css/Body.css'
const Footer = () => {
  const navigate=useNavigate()
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0}} className="Footer" 
      elevation={12}
      
    >
      <BottomNavigation>
        <Typography Varient="h5" sx={{ marginRight: "65%" }}>
          Copyright © 2020 KISTicket V1.10.1
        </Typography>
        <Button>
          <Icon>
            <HomeOutlinedIcon onClick={()=>{
          navigate("/")
         }}/>
          </Icon>
        </Button>
        <Button>
          <Icon>
            <ShoppingCartOutlinedIcon onClick={()=>{
          navigate("/form")
         }} />
          </Icon>
        </Button>
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
