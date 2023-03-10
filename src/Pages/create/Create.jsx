import "./Create.css";

import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // @ts-ignore
  backgroundColor: theme.palette.ali.main,
  "&:hover": {
    // @ts-ignore
    backgroundColor: theme.palette.ali.main,
    scale: "0.99",
  },
}));

const Create = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = ({ title, price }) => {
    price= Number(price)
    fetch("http://localhost:3100/mydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, price }),
    }).then(() => {
      navigate("/");
    });
  };

  // why use component >>> "form"
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      sx={{ width: "380px" }}
      component="form"
    >
      <TextField
        fullWidth={true}
        label="Transaction Title"
        sx={{ mt: "22px", width: "380px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
        {...register("title", {
          required: { value: true, message: "Requered Filed" },
          minLength: { value: 3, message: "minimum length is 3 characters" },
        })}
        error={Boolean(errors.title)}
      
        helperText={Boolean(errors.title) ? errors.title.message.toString() : null}
      />

      <TextField
        error={Boolean(errors.price)}
        helperText={Boolean(errors.price) ? errors.price.message.toString() : null}
        {...register("price", { required: {value: true, message: "Requered Filed"} })}
        fullWidth={true}
        label="Transaction Title"
        id="filled-start-adornment"
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
        type="number"
      />

      <ColorButton
        type="submit"
        onClick={(params) => {}}
        sx={{ mt: "22px" }}
        variant="contained"
      >
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
};

export default Create;
