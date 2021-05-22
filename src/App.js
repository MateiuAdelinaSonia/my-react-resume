import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Container, Avatar} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        width: 416,
        height: 60,
        backgroundColor: "#fff",
        alignSelf: "center",
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
}));

function App() {
    const classes = useStyles();
    return (
        <Container maxWidth="md" style={{ backgroundColor: '#bad4d1', height: '1500px', width: '2000px'}}>

            <Grid container spacing={10}>

                <Grid item xs={12}>
                    <div className={classes.root}>
                        <Avatar alt="Mateiu Adelina-Sonia" src="../myPicture.jpg" className={classes.large} />
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <Paper className={classes.paper} />
                </Grid>

                <Grid item xs={6}>
                    <Paper className={classes.paper} />
                </Grid>

            </Grid>



        </Container>


    );
}

export default App;
