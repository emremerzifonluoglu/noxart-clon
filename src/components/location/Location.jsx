import { Box, Container, Grid, Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";

import "./location.css";
import DataImg from "../../dataImg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

const containerStyle = {
  width: "400px",
  height: "300px",
};

// const center = {
//   lat: 36.86304054394091,
//   lng: 30.803929170594902,
// };

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  textAlign: "center",
}));
function Location() {
  const center = useMemo(
    () => ({
      lat: 36.86304054394091,
      lng: 30.803929170594902,
    }),
    []
  );
  return (
    <Box className="box" sx={{ flexGrow: 1 }}>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <Grid container spacing={2} direction="column">
              <Grid item xs={2} md={2}>
                <h2 className="g-l-h2">We are here</h2>
                <p className="g-l-p">
                  We are an art and technology company that builds the future
                  that combines technology and art in the global world.
                </p>
              </Grid>
              <Grid item xs={10} md={10}>
                <Grid container spacing={4}>
                  {DataImg.map((data) => (
                    <Grid item xs={6} sm={4} md={3} key={data.id}>
                      <Item>
                        <img className="g-img" src={data.img} alt="" />
                      </Item>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid mt={18} item xs={6} md={4}>
            <LoadScript googleMapsApiKey="AIzaSyCzFvegwUbcLh4UOwAabQlfQXHTGJO1ito">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={17}
              >
                <>
                  <Marker position={center} />
                </>
              </GoogleMap>
            </LoadScript>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <div className="button">
              <button className="b-b">Antalya</button>
              <button className="b-b">??stanbul</button>
            </div>
          </Grid>
          <Grid item xs={6} md={6}>
            <div className="h-p">
              <h2 className="g-l-h2">Address</h2>
              <p className="g-l-p">
                G??zeloba, Rauf Denkta?? CD No: 57/B, 07230 Muratpa??a/Antalya
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Location;
