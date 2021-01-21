
// import {Card, CardContent, CardHeader, Typography} from '@material-ui/core'

// import CardMedia from "@material-ui/core/CardMedia";
// import {makeStyles} from '@material-ui/core/styles';

import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import theme from "./theme";
// const useStyles = makeStyles(() => ({
//     root: {
//        width: 300,
//        margin: 'auto'
       
//       },
//     imgStyles: {
       
//         height: '100%',
//         width: 200
//     }
//   }));

const useStyles = makeStyles((theme) => ({
    cardRoot: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
  

  }));
  
function Stub(props) {

    const classes = useStyles();

    return (
        // <Card variant="outlined" classname={classes.root}>
        //     <CardMedia className={classes.imgStyles} image={props.datum.imgSrc} title="bird" />
        //     {/* <CardMedia style = {{ height: 0, paddingTop: '10%'}} image={props.datum.imgSrc} title="bird" /> */}
        //     <CardHeader title={props.datum.title}  />
        //     <CardContent>
        //         <Typography variant="body2">{props.datum.blurb}</Typography>
        //         <Typography variant="body2">{props.datum.author}</Typography>
        //     </CardContent>
            
                    
        // </Card>
        <Card variant="outlined" className={classes.cardRoot}>
        
        <CardMedia
            className={classes.cover}
            image={props.datum.imgSrc}
           
        />

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.datum.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.datum.author}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
             {props.datum.blurb}
          </Typography>
        </CardContent>
        
      </div>
      
    </Card>
    )
}


export default Stub;