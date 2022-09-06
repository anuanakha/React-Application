import React from "react"
import {styled,AppBar,Toolbar,Typography,Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
   
  });
  
  const StyledAppBar = styled(AppBar)({
    position: "sticky",
    backgroundColor: "Blue",
    paddingBottom: "2%",
  });
  
const ViewHeader=()=>{
    const navigate=useNavigate()
    return (
        <StyledAppBar>
        <StyledToolbar>
          <Typography variant="h5">Kis Kiosk</Typography> <Button onClick={()=>{
            navigate('/')
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
         >Home</Button>
         <HomeOutlinedIcon
         sx={{display:{
          xs:"block",
          sm:"none"
         }}}
         onClick={()=>{
          navigate("/")
         }}/>
        </StyledToolbar>
      </StyledAppBar>
    )
}

export default ViewHeader