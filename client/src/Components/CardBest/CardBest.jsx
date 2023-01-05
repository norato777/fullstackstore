import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Somos tu mejor opcion
        </Typography>
        <Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
          {bull}Mas de 40000 productos
        </Typography>
        <Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
          {bull}Compras y envios seguros
        </Typography>
        <Typography sx={{ fontSize: 17 }} color="text.secondary" gutterBottom>
          {bull}Comparte y revisa opiniones
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Conoce mas</Button>
      </CardActions>
    </Card>
  );
}
