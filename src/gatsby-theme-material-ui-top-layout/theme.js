import { createMuiTheme } from '@material-ui/core/styles';
import {white, paletteMain, paletteSecondary} from '../constants/colors';


const theme = createMuiTheme({  
  spacing: 4,
  // shadows: [],
  palette: {
    background: {
      default: white,
    },
    primary: {
      main: paletteMain,
      contrastText: white,
    },
    secondary: {
      main: paletteSecondary,
      contrastText: white,
    },
  },
  shape: {
    borderRadius: 0,
  }
});

export default theme;