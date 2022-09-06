import React from "react";
import { AppBar, Toolbar, Typography,Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';


const Display = () => {
    const navigate=useNavigate()
  return (
    <div>
      <AppBar position="relative" sx={{ paddingBottom: "2%" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ paddingLeft: "20px" }}>
            Kis Kiosk
          </Typography>
          <Button onClick={()=>{
            navigate('/view')
          }}
          sx={{
            color: "white",
            paddingLeft:"80%",
            margin: 3,
            display: {
              xs: "none",
              sm: "block",
            },
          }}
         >View</Button>
         <RemoveRedEyeOutlinedIcon onClick={()=>{
   navigate("/view")
  }}
 sx={{ display: { xs: "block", sm: "none" } }}
/>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Display;
