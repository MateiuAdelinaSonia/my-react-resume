import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Container, Avatar} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        width: 380,
        height: 60,
        backgroundColor: "#fff",
    },
    large: {
        width: theme.spacing(18),
        height: theme.spacing(18),
    },
}));

function App() {
    const classes = useStyles();
    return (
        <Container maxWidth="md" style={{ backgroundColor: '#d9dede', height: '1500px', width: '2000px'}}>

            <Grid container spacing={10}>

                <Container maxWidth="md" style={{backgroundColor: 'rgba(123,70,134,0.91)', height: '1500px', width: '460px'}}>

                    <Grid item xs={6} style={{marginTop: '50px'}}>
                        <div className={classes.root}>
                            <Avatar alt="Mateiu Adelina-Sonia" src="../myPicture.jpg" className={classes.large} />
                        </div>
                    </Grid>

                    <Grid item xs={6} style={{marginTop: '35px', marginLeft: '14px'}}>
                        <Paper align="center" className={classes.paper}>
                            <img src="../graduation.png" width='30' hight='30' style={{marginTop: '10px'}}/>
                            <typography style={{fontSize: 30, fontWeight: 'bold', color: '#1f0e0d'}}>  Education</typography> </Paper>
                    </Grid>

                    <Grid item xs={6} style={{marginTop: '35px', marginLeft: '14px'}}>
                        <Paper align="center" className={classes.paper}>  </Paper>
                    </Grid>

                    <Grid item xs={6} style={{marginTop: '35px', marginLeft: '14px'}}>
                        <Paper align="center" className={classes.paper}>  </Paper>
                    </Grid>

                    <Grid item xs={6} style={{marginTop: '35px', marginLeft: '14px'}}>
                        <Paper align="center" className={classes.paper}>  </Paper>
                    </Grid>

                </Container>

                <Grid align="center" item xs={6} style={{ marginTop: '188px', marginRight: '20px'}}>
                    <Paper align="center" className={classes.paper} />
                </Grid>

            </Grid>

        </Container>


    );
}

export default App;
