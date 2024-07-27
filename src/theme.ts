import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#262626",
    },
    secondary: {
      main: "#DC143C",
    },
  },
  typography:{
    fontFamily:"Montserrat"
  }
});

theme = responsiveFontSizes(theme);
export default theme;