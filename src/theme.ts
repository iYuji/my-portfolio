import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: "#EEEEEE",
    },
    secondary: {
      main: "#A7A6A6",
    },
  },
  typography:{
    fontFamily:"Montserrat"
  }
});

theme = responsiveFontSizes(theme);
export default theme;