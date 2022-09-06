import {
  Button,
  Grid,
  Paper,
  styled,
  TextField,
  Typography,
  Box,
} from "@mui/material";

import FolderIcon from "@mui/icons-material/Folder";
import React, { useState } from "react";
import axios from "axios";
import { nodePost} from "../utils/Api";
import { useNavigate } from "react-router-dom";
import ViewHeader from "./ViewHeader";
import Loading from "./Loading";
import swal from "sweetalert";

const Styledpaper = styled(Paper)({
  padding: "30px  20px",
  width: 300,
  margin: "20px auto",
});

const Form = () => {
  const navigate = useNavigate();

  const [formValue, setFormvalue] = useState({
    name: "",
    price: "",
    description: "",
  });

  const [productImage, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    const FormPostdata = new FormData();
    FormPostdata.append("name", formValue.name);
    FormPostdata.append("price", formValue.price);
    FormPostdata.append("description", formValue.description);
    FormPostdata.append("productImage", productImage);

    axios
      .post(nodePost, FormPostdata)
      .then((res) => {
        
        swal({
          title: "Success",
          text: "Operation successfully done",
          icon: "success",
          button: "ok"
        });
        navigate("/view");
        
      })
      .catch((error) => {
        alert(error);
        setLoading(false)
      });
  }

  const handleChange = (event) => {
    setFormvalue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Grid>
      { loading && <loading/>}
      <ViewHeader />
      <Styledpaper elevation={24}>
        <Grid align="center">
          <Typography variant="h4" sx={{ margin: "0px" }}>
            Add Product
          </Typography>
          <Typography variant="caption">
            please add the product details
          </Typography>
        </Grid>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            fullWidth
            label="product name"
            name="name"
            value={formValue.name}
            onChange={handleChange}
          />
          <TextField
            required
            fullWidth
            type="number"
            label="product price"
            name="price"
            value={formValue.price}
            onChange={handleChange}
          />

          <TextField
            id="outlined-multiline-static"
            required
            label="product description"
            multiline
            rows={4}
            fullWidth
            name="description"
            value={formValue.description}
            onChange={handleChange}
          />
          <label>
            <Button
              variant="contained"
              color="secondary"
              component="label"
              sx={{ mb: "4px" }}
            >
              <input
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
                hidden
              />
              <FolderIcon /> Upload photo
            </Button>
          </label>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            variant="contained"
            fullWidth
          >
            ADD
            {loading && <Loading/>}
          </Button>
          
        </Box>
      </Styledpaper>
    </Grid>
  );
};

export default Form;
