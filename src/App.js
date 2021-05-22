import {makeStyles} from '@material-ui/core/styles';
import {Grid, Paper, Container, Avatar, Button, Typography, Link} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        width: 380,
        height: 240,
        backgroundColor: "#fff",
    },
    project_paper: {
        width: 420,
        height: 1408,
        backgroundColor: "#fff",
    },
    picture_paper: {
        width: 380,
        height: 144,
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
        <Container maxWidth="md" style={{backgroundColor: '#ddd0e0', height: '1500px', width: '2000px'}}>

            <Grid container spacing={10}>

                <Container maxWidth="md" style={{backgroundColor: 'rgba(123,70,134,0.91)', height: '1500px', width: '460px'}}>

                    <Grid item xs={6} style={{marginTop: '50px', marginLeft: '14px'}}>

                        <Paper align="center" className={classes.picture_paper} style={{backgroundColor: 'rgba(123,70,134,0.91)'}}>
                            <div className={classes.root} >
                                <Avatar alt="Mateiu Adelina-Sonia" src="../myPicture.jpg" className={classes.large}/>
                            </div>
                        </Paper>
                        <br/>
                        <Paper align="center" className={classes.picture_paper}>
                            <div className={classes.root} >
                                <Typography className={classes.root}>
                                    <img src="../github.png" width='30' hight='30' style={{marginTop: '10px'}}/>
                                    <a href="https://github.com/MateiuAdelinaSonia">
                                    <b>      github.com/MateiuAdelinaSonia</b> <br/>
                                    </a>
                                    <img src="../email.png" width='30' hight='30' style={{marginTop: '10px'}}/>
                                    <a href="mailto:adelinasonia.mateiu@gmail.com">
                                    <b>      adelinasonia.mateiu@gmail.com</b> <br/>
                                    </a>
                                    <img src="../phone.png" width='30' hight='30' style={{marginTop: '10px'}}/>
                                        <a href="tel:0040765029836">
                                    <b>      Phone number: +40 765 029 836</b>
                                        </a>
                                </Typography>
                            </div>
                        </Paper>

                    </Grid>

                    <Grid item xs={6} style={{marginTop: '35px', marginLeft: '14px'}}>

                        <Paper align="center" className={classes.paper}>
                            <img src="../graduation.png" width='30' hight='30' style={{marginTop: '10px'}}/>
                            <typography style={{fontSize: 30, fontWeight: 'bold', color: '#1f0e0d'}}> Education</typography>
                            <div style={{textAlign: 'center', color: '#000'}}>
                                <br/>
                                Bachelor of Computer Engineering <br/>
                                Politehnica University of Timisoara <br/> Computer and Information
                                Technology <br/>
                                <img src="../calendar.png" width='14' hight='14' style={{marginTop: '5px'}}/>
                                &nbsp;
                                Oct 2018 – Jun 2022 <br/> <br/>
                                Bachelor degree <br/>
                                "Ioan Jebelean" Theoretical High School <br/>
                                <img src="../calendar.png" width='14' hight='14' style={{marginTop: '5px'}}/>
                                &nbsp;
                                Sep 2014 – Jun 2018
                            </div>
                        </Paper>

                    </Grid>

                    <Grid item xs={6} style={{marginTop: '35px', marginLeft: '14px'}}>
                        <Paper align="center" className={classes.paper}>
                            <img src="../checklist.png" width='30' hight='30' style={{marginTop: '10px'}}/>
                            <typography style={{fontSize: 30, fontWeight: 'bold', color: '#1f0e0d'}}> Achievements
                            </typography>
                            <div style={{textAlign: 'left', color: '#000'}}>
                                <ul>
                                    <li>1st year grade - 8.50</li>
                                    <br/>
                                    <li>2nd year grade - 9.35
                                        <br/>&nbsp;&nbsp;&nbsp; Received scholarship
                                    </li>
                                    <br/>
                                    <li>3rd year - 1st semester grade - 9.42
                                        <br/>&nbsp;&nbsp;&nbsp; Received scholarship
                                    </li>
                                    <br/>
                                </ul>
                                <br/>
                            </div>
                        </Paper>

                    </Grid>

                    <Grid item xs={6} style={{marginTop: '35px', marginLeft: '14px'}}>

                        <Paper align="center" className={classes.paper}>
                            <img src="../competence.png" width='30' hight='30' style={{marginTop: '10px'}}/>
                            <typography style={{fontSize: 30, fontWeight: 'bold', color: '#1f0e0d'}}> Skills
                            </typography>
                            <div style={{textAlign: 'left', color: '#000'}}>
                                <ul>
                                    <li>SQL, Java</li>
                                    <br/>
                                    <li>C, Excel, HTML, OOP, Design Patterns, GIT</li>
                                    <br/>
                                    <li>C++, Matlab, Octave, PHP, Bash</li>
                                    <br/>
                                    <li>Simulink, Verilog, Javascript, CSS</li>
                                </ul>
                                <br/>
                            </div>
                        </Paper>

                    </Grid>

                    <Grid item xs={6} style={{marginTop: '35px', marginLeft: '14px'}}>

                        <Paper align="center" className={classes.paper}>
                            <img src="../translate.png" width='30' hight='30' style={{marginTop: '10px'}}/>
                            <typography style={{fontSize: 30, fontWeight: 'bold', color: '#1f0e0d'}}> Languages
                            </typography>
                            <div style={{textAlign: 'left', color: '#000'}}>
                                <ul>
                                    <li><img src="../romania.png" width='30' hight='30' style={{marginTop: '10px'}}/> Romanian - Native</li>
                                    <br/>
                                    <li><img src="../uk.png" width='30' hight='30' style={{marginTop: '10px'}}/> English - Upper Intermediate</li>
                                    <br/>
                                    <li><img src="../serbia.png" width='30' hight='30' style={{marginTop: '10px'}}/> Serbian - Intermediate</li>
                                </ul>
                                <br/>
                            </div>
                        </Paper>

                    </Grid>

                </Container>

                <Grid align="center" item xs={6} style={{marginTop: '8px', marginRight: '20px'}}>

                    <Paper align="center" className={classes.project_paper}>
                        <img src="../project.png" width='30' hight='30' style={{marginTop: '60px'}}/>
                        <typography style={{fontSize: 30, fontWeight: 'bold', color: '#1f0e0d'}}> Projects</typography>
                        <div style={{textAlign: 'left', color: '#000', marginTop: '68px'}}>
                            <p><Button variant="contained" style={{color: 'rgba(123,70,134,0.91)'}}>
                                <b><i>Libraries App</i></b>
                            </Button>
                                <Button variant="contained" color='secondary' href="https://github.com/MateiuAdelinaSonia/Libraries-Application">
                                    View project
                                </Button>
                                <ul>
                                    <li>Developed a Desktop Application, using
                                        Java, that allows libraries to manage their
                                        books/documents booking and online reading
                                        access. The library can opt-in to allow the
                                        user to read a specific book online, or allow
                                        the user to make a booking request and if
                                        the booking request is accepted by the library
                                        manager, the user can come physically to the
                                        library to pick up that book.
                                    </li>
                                    <br/>
                                    <li>Developed the Backend using Java and
                                        Maven, and made use of JSON entities to
                                        fetch/persist the library database and the information
                                        related to the user.
                                    </li>
                                    <br/>
                                    <li>Developed the Frontend using JavaFX and
                                        FXML for the templating.
                                    </li>
                                </ul>
                            </p>
                            <p><Button variant="contained" style={{color: 'rgba(123,70,134,0.91)', marginTop: '68px'}}>
                                <b><i>Alarm System - Arduino</i></b>
                            </Button>
                                <Button variant="contained" color='secondary' href="https://www.tinkercad.com/embed/5hKahdtF0Nj?editbtn=1" style={{marginTop: '68px'}}>
                                    View project
                                </Button>
                                <ul>
                                    <li>Developed an alarm system, using Arduino.
                                        The project consists of an alarm system, that
                                        works as it follows: if the alarm system is
                                        armed, the PIR sensors detect the motion
                                        within their range and the buzzer emits an
                                        acoustic signal and shows the alert on an LCD,
                                        which may include the room in which the motion
                                        has been detected. If the system is disarmed,
                                        any motion that the PIR sensor detects
                                        will be ignored. The arming/disarming of the
                                        system it is done using a keycode introduced
                                        using a keypad.
                                    </li>
                                </ul>
                            </p>
                            <p><Button variant="contained" style={{color: 'rgba(123,70,134,0.91)', marginTop: '68px'}}>
                                <b><i>Morse Code - Arduino</i></b>
                            </Button>
                                <Button variant="contained" color='secondary' href="https://www.tinkercad.com/embed/gXfsY2lRQS2?editbtn=1" style={{marginTop: '68px'}}>
                                    View project
                                </Button>
                                <ul>
                                    <li>Developed a master-slave system, that makes
                                        use of 2 Arduino boards. The master board receives
                                        a message, it encodes it to Morse Code
                                        and transmits it to the slave board. The slave
                                        board receives the code sent by the master
                                        board and makes use of an LED and a Buzzer,
                                        in order to play the Morse Code visually and
                                        acoustically.
                                    </li>
                                </ul>
                            </p>
                            <p><Button variant="contained" style={{color: 'rgba(123,70,134,0.91)', marginTop: '68px'}}>
                                <b><i>Depo Construct</i></b>
                            </Button>
                                <ul>
                                    <li>Developed a web platform using PHP and
                                        Bootstrap, which has two interfaces, one for
                                        the manager, that allows him to make CRUD
                                        operations on his database. And the second
                                        interface allows the user to buy products from
                                        the business.
                                    </li>
                                    <br/>
                                    <li>Designed the MySQL database.</li>
                                </ul>
                            </p>
                        </div>
                    </Paper>

                </Grid>

            </Grid>

        </Container>

    );
}

export default App;
