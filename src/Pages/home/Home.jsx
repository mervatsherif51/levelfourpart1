import "./Home.css";
import { useEffect, useState } from "react";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const Home = () => {
  const [mydata, setmydata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  }, [mydata]);

//  const [totalPrice, settotalPrice] = useState(0);
  
let totalPrice = 0; 

return (
    <Box>
      {mydata.map((item) => {
        totalPrice +=  item.price

        return (
          <Paper
            key={item.id}
            sx={{
              display: "flex",
              width: "366px",
              justifyContent: "space-between",
              mt: "22px",
              pt: "22px",
              pb: "7px",
              position: "relative",
            }}
          >
            <Typography sx={{ ml: "15px", fontSize: "1.3em" }} variant="h6">
              {item.title}
            </Typography>
            <Typography
              sx={{
                mr: "33px",
                fontWeight: 500,
                fontSize: "1.4em",
                opacity: "0.8",
              }}
              variant="h6"
            >
              $ {item.price}
            </Typography>
            <IconButton
              onClick={() => {
                fetch(`http://localhost:3100/mydata/${item.id}`, {
                  method: "DELETE",
                });
              }}
              sx={{ position: "absolute", top: "0px", right: "0px" }}
            >
              <Close sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}
      <Typography sx={{textAlign: "center", mt: "55px"}} variant="h6">👉 You Spend ${totalPrice}</Typography>
    </Box>
  );
};

export default Home;
