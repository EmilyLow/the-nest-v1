
import {Card, Grid} from '@material-ui/core'
function Stub(props) {



    return (
        <Card variant="outlined">
            <Grid container direction="row">
                <Grid item xs={1}/>
                <Grid container xs={10}>
                        <Grid item xs={2}>
                            <img src={props.datum.imgSrc} alt="bird" />
                        </Grid>
                    
                    <Grid item  direction="column" xs={8}>
                        <Grid item><h3>{props.datum.title}</h3></Grid>
                        <Grid item><p>{props.datum.blurb}</p></Grid>
                        <Grid item><p>{props.datum.author}</p></Grid>           
                    </Grid>
               </Grid>
               <Grid item xs={1}/>
            </Grid>
        </Card>
    )
}


export default Stub;