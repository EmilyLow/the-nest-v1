import logo from './images/origami_bird_icon.svg';
import './App.css';

import Header from "./Header";
import Content from "./Content";

import {Typography, Paper, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  testStyle: {
    fontStyle: 'oblique',
    fontSize: "80px"
  },
  testStyle2: {
    fontSize: "20px"
  }
});

function App() {  
  const classes = useStyles();
  return (
    <Grid container direction="column">
      
        {/* <Grid item xs={3}/> */}
        <Grid item>
          <Header/>
        </Grid>
      
 
     <Grid item container>
       <Content/>
     </Grid>
     
      
    </Grid>
  );
}

export default App;
