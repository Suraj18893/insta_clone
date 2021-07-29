import React, { Component } from 'react'
import "./MainContent.css";
import Grid  from '@material-ui/core/Grid';
import StatusBar from '../StatusBar/StatusBar';
import MainPage from '../MainPage/MainPage';
// import InfoSection from '../InfoSection/InfoSection';
// import Suggestions from '../Suggestions/Suggestions';

class MainContent extends Component {
    render() {
        return (
            <div>
                <div>
                <Grid container>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6} className="maincontent__container">
                        <div>
                            <StatusBar />
                            <MainPage />
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        {/* <InfoSection /> */}
                        {/* <Suggestions /> */}
                        lalal
                    </Grid>
                    <Grid item xs={2}>
                        lalala
                    </Grid>
                </Grid>
            </div>
            </div>
        )
    }
}

export default MainContent
