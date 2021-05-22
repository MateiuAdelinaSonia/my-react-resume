import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Container, Avatar} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        width: 380,
        height: 240,
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
                            <typography style={{fontSize: 30, fontWeight: 'bold', color: '#1f0e0d'}}>   Education</typography>
                            <div style={{textAlign: 'center', color: '#000'}}>
                                <br></br>
                                Bachelor of Computer Engineering <br></br>
                                Politehnica University of Timisoara <br></br> Computer and Information Technology <br></br>
                                <img src="../calendar.png" width='14' hight='14' style={{marginTop: '5px'}}/>
                                &nbsp;
                                Oct 2018 – Jun 2022 <br></br> <br></br>
                                Bachelor degree <br></br>
                                "Ioan Jebelean" Theoretical High School <br></br>
                                <img src="../calendar.png" width='14' hight='14' style={{marginTop: '5px'}}/>
                                &nbsp;
                                Sep 2014 – Jun 2018
                            </div>
                        </Paper>

                    </Grid>

                    <Grid item xs={6} style={{marginTop: '35px', marginLeft: '14px'}}>
                        <Paper align="center" className={classes.paper}>
                            <img src="../checklist.png" width='30' hight='30' style={{marginTop: '10px'}}/>
                            <typography style={{fontSize: 30, fontWeight: 'bold', color: '#1f0e0d'}}>   Achievements</typography>
                            <div style={{textAlign: 'left', color: '#000'}}>
                                <ul><li>1st year grade - 8.50</li> <br></br>
                                    <li>2nd year grade - 9.35
                                        <br></br>&nbsp;&nbsp;&nbsp; Received scholarship</li> <br></br>
                                    <li>3rd year - 1st semester grade - 9.42
                                        <br></br>&nbsp;&nbsp;&nbsp; Received scholarship</li> <br></br>
                                </ul> <br></br>
                            </div>
                        </Paper>

                    </Grid>

                    <Grid item xs={6} style={{marginTop: '35px', marginLeft: '14px'}}>

                        <Paper align="center" className={classes.paper}>
                            <img src="../competence.png" width='30' hight='30' style={{marginTop: '10px'}}/>
                            <typography style={{fontSize: 30, fontWeight: 'bold', color: '#1f0e0d'}}>   Skills</typography>
                            <div style={{textAlign: 'left', color: '#000'}}>
                                <ul><li>SQL, Java</li> <br></br>
                                    <li>C, Excel, HTML, OOP, Design Patterns, GIT</li> <br></br>
                                        <li>C++, Matlab, Octave, PHP, Bash</li> <br></br>
                                            <li>Simulink, Verilog, Javascript, CSS</li>
                                </ul> <br></br>
                            </div>
                        </Paper>

                    </Grid>

                    <Grid item xs={6} style={{marginTop: '35px', marginLeft: '14px'}}>

                        <Paper align="center" className={classes.paper}>
                            <img src="../translate.png" width='30' hight='30' style={{marginTop: '10px'}}/>
                            <typography style={{fontSize: 30, fontWeight: 'bold', color: '#1f0e0d'}}>   Languages</typography>
                        </Paper>

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
