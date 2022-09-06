import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';


const ButtonAdd=()=>{
    let navigate=useNavigate();
    return (
        <>
        <Button
 onClick={()=>{
   navigate("/form")
  }}
 variant="outlined"
 
 sx={{
   color: "white",
   margin: 3,
   display: {
     xs: "none",
     sm: "block",
   },
 }}
>
 Add product
</Button>
<ShoppingCartOutlinedIcon onClick={()=>{
   navigate("/form")
  }}
 sx={{ display: { xs: "block", sm: "none" } }}
/>
        </>

    )
}
 
export default ButtonAdd;