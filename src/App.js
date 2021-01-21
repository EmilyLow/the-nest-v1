import logo from './images/origami_bird_icon.svg';
import './App.css';
import sampleData from "./sampleData";
import Stub from "./Stub";

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
      <Grid container item direction="row" >
        <Grid item xs={3}/>
        <Grid item>
          <img src={logo} className="App-logo" alt="logo" />
        </Grid>
        
        <Grid item>
          <Typography className = {classes.testStyle} variant="h3" align="center" color="primary" gutterBottom>The Nest</Typography>
        </Grid>
        <Grid item xs={3}/>
      </Grid>
      
       
       
        
       
     
      {/* {console.log(sampleData)} */}
      {sampleData.map((datum) => {
          return <Stub datum={datum}/>
        })}
      
    </Grid>
  );
}

export default App;
