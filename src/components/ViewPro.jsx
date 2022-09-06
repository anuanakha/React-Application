import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import axios from "axios";
import { nodeGet} from "../utils/Api";
import ViewHeader from "./ViewHeader";
import Loading from "./Loading";
import swal from "sweetalert";
// import ProductImage from "C:/Users/ADMIN/Desktop/node/backend/upload/"

const View = () => {

  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    axios
      .get(nodeGet)
      .then((res) => {
        setMyData(res.data);
        setLoading(true);
      })
      .catch((error) => {
        swal({
          title: "Sorry",
          text: "Unable to  connect",
          icon: "error",
          button: "ok"
        });
        
      });
  }, []);
  return (
    <div>
      <ViewHeader />
      <Box
        sx={{
          // backgroundColor:'',
          pt: 4,
          pb: 1,
        }}
      >
        <Typography align="center" variant="h5">
          Product View
        </Typography>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {loading ? (
            myData.map((data) => (
              <Grid item key={data.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: 150,
                      pt: "20%",
                    }}
                    src={require("C:/Users/ADMIN/Desktop/node/backend/upload/"+data.productImage)}
                    alt="No image"
                  />
                  <CardContent sx={{}}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Product Name :{data.name}
                    </Typography>
                    <Typography>Discription :{data.description}</Typography>
                    <Typography>Price : {data.price}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Loading />
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default View;
