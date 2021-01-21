import {createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: {
          light: '#ffbcaf',
          main: '#ff8a80',
          dark: '#c85a54',
          contrastText: '#000000',
        },
        secondary: {
          light: '#baffff',
          main: '#84ffff',
          dark: '#4bcbcc',
          contrastText: '#000000',
        },
      },
});

export default theme;