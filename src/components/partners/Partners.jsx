import React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import "./partners.css";
import dataPartner from "../../dataPartner";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#131313",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  filter: "grayscale(100%)",
  textAlign: "center",
  borderRadius: "0.5rem",
}));

function Partners() {
  return (
    <div className="partners">
      <Container maxWidth="xl">
        <h2 className="p-h2">Our Partners</h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {dataPartner.map((dataPartner) => (
              <Grid item xs={2.4} sm={2.4} md={2.4} key={dataPartner.id}>
                <Item className="item">
                  <img className="p-img" src={dataPartner.img} alt="" />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default Partners;
