import { Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";

const Header = () => {
  return (
    <AppBar color="primary" sx={{
      display: "flex",
      alignItems: "center"
    }}>
      <Toolbar>
        <Typography variant="h6">
          CarsAssistent
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
