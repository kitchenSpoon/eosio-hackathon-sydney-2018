import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import SmokeStack from '../images/smokestack.jpg';
import TrainBG from '../images/train.jpg';
import Trucks from '../images/trucks.jpg';
import ForestBG from '../images/forest.jpg';
import CarbonCarrotsFlow from '../images/carbonCarrotsFlow.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faRecycle, faTree } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../node_modules/@material-ui/core';

library.add(faBus)
library.add(faRecycle)
library.add(faTree)

export default class ClaimList extends Component {
    render() {

        const { onClickClaim, companyAValue, companyBValue } = this.props;

        return (
            <div>
                <ul style={styles.claim_list}>
                    <li style={styles.claim_list_item}>
                        <div style={styles.smokeStackBG}></div>
                        <div style={styles.content}>
                            <Typography style={styles.title}>Factory A</Typography>
                            <Typography style={styles.description}></Typography>
                        </div>
                        <Typography style={styles.reward}>{companyAValue}</Typography>
                        <Typography style={styles.unit}>CCT</Typography>

                        <Typography style={styles.reward}>$65,259,776</Typography>
                        <Typography style={styles.unit}>USD</Typography>
                    </li>
                    <li style={styles.claim_list_item}>
                        <div style={styles.trucksBG}></div>
                        <div style={styles.content}>
                            <Typography style={styles.title}>Transportation Companies</Typography>
                            <Typography style={styles.description}></Typography>
                        </div>
                        <Typography style={styles.reward}>{companyBValue}</Typography>
                        <Typography style={styles.unit}>CCT</Typography>

                        <Typography style={styles.reward}>$127,878,256</Typography>
                        <Typography style={styles.unit}>USD</Typography>
                    </li>

                </ul>

                <div style={styles.flowChart}></div>
            </div>
        )
    }
}

const styles = {
    claim_list: {
        width: '1400px',
        margin: '0 auto',
    },
    claim_list_item: {
        background:'white',
        listStyle: 'none',
        display: 'inline-block',
        width: '40%',
        margin: '50px 50px',
        borderRadius: '10px',
        boxShadow: '0 3px 20px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
        paddingBottom: '30px'
    },
    icon: {
        display: 'inline-block',
        width: '36px',
        height: '36px',
        background: 'white',
        borderRadius: '30px',
        margin: '-30px 0 0 170px',
        fontSize: '2em',
        textAlign: 'center',
        padding: '12px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    },
    content: {
        padding: '20px'
    },
    title: {
        fontSize: '1.5em',
        fontWeight: '400'
    },
    description: {
        color: '#999',
        fontSize: '1.2em',
    },
    reward: {
        textAlign: 'center',
        fontSize: '3em',
        fontWeight: '300',
    },
    unit: {
        textAlign: 'center',
        color: '#aaa'
    },
    buttonContainer: {
        display: 'flex',
        padding: '20px',
        marginTop: '10px',
        color: 'white',
        backgroundColor: '#3cc47c',
    },
    action: {
        marginTop: '20px',
        padding: '20px',
    },
    button: {
        backgroundColor: '#3cc47c',
        padding: '10px',
        color: '#fff',
        fontSize: '1.2em',
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '3px',
        display: 'flex',
    },
    smokeStackBG: {
        width: "100%",
        height: "200px",
        background: `url(${SmokeStack}) no-repeat center`,
        backgroundSize: '570px 250px'
    },
    trucksBG: {
        width: "100%",
        height: "200px",
        background: `url(${Trucks}) no-repeat center`,
        backgroundSize: '600px 300px'
    },
    forestBG: {
        width: "100%",
        height: "200px",
        background: `url(${ForestBG}) no-repeat center`,
        backgroundSize: '400px 267px'
    },
    flowChart: {
        width: "100%",
        height: "600px",
        background: `url(${CarbonCarrotsFlow}) no-repeat center`,
        backgroundSize: '900px 600px',
        marginBottom: 100,
        marginTop: 100,
    },
}
