import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    common: {
      blue: '#01a1dd',
      white: '#FFFFFF',
    },
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#01a1dd',
    },
  },
  typography: {
    fontFamily: [
      'Avenir Next',
      'Avenir, Roboto',
      'Century Gothic',
      'Franklin Gothic Medium',
      'Helvetica Neue',
      'Helvetica, Arial',
      'sans-serif',
    ].join(','),
  },
  text: {
    primary: '#555',
  },
});
