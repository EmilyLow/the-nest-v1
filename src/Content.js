import React from "react";

import {Grid} from "@material-ui/core";
import sampleData from "./sampleData";

import Stub from "./Stub";


const Content = () => {


    return(
    <Grid container spacing={0} direction="column">
        {sampleData.map((datum) => {
          return (
            <Grid item> 
              <Stub datum={datum}/> 
            </Grid>);
        })}
    </Grid>
    );
}


export default Content; 