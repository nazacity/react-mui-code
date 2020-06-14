import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#ff3d00',
    },
    background: {
      default: '#fff',
    },
  },
  color: {
    black: '#000',
  },
});

export default theme;
