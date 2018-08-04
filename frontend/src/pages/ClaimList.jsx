import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TrainBG from '../images/train.jpg';
import WaterBG from '../images/water.jpg';
import ForestBG from '../images/forest.jpg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faRecycle, faTree } from '@fortawesome/free-solid-svg-icons'

library.add(faBus)
library.add(faRecycle)
library.add(faTree)

export default class ClaimList extends Component {
    render() {
        return (
            <div>
                <ul style={styles.claim_list}>
                    <li style={styles.claim_list_item}>
                        <div style={styles.trainBG}></div>
                        <div style={styles.icon}><FontAwesomeIcon icon="bus" /></div>
                        <div style={styles.content}>
                            <Typography style={styles.title}>Train from Epping to Central</Typography>
                            <Typography style={styles.description}>20km 0.02T Carbon Saved</Typography>
                        </div>
                        <Typography style={styles.reward}>20</Typography>
                        <Typography style={styles.unit}>CCT</Typography>
                        <div style={styles.action}>
                            <Typography style={styles.button}>Claim</Typography>
                        </div>
                    </li>
                    <li style={styles.claim_list_item}>
                        <div style={styles.waterBG}></div>
                        <div style={styles.icon}><FontAwesomeIcon icon="recycle" /></div>
                        <div style={styles.content}>
                            <Typography style={styles.title}>Bottle refill at starbucks</Typography>
                            <Typography style={styles.description}>17g Carbon Saved</Typography>
                        </div>
                        <Typography style={styles.reward}>0.01</Typography>
                        <Typography style={styles.unit}>CCT</Typography>
                        <div style={styles.action}>
                            <Typography style={styles.button}>Claim</Typography>
                        </div>
                    </li>
                    <li style={styles.claim_list_item}>
                        <div style={styles.forestBG}></div>
                        <div style={styles.icon}><FontAwesomeIcon icon="tree" /></div>
                        <div style={styles.content}>
                            <Typography style={styles.title}>Plant tree</Typography>
                            <Typography style={styles.description}>1T Carbon for year</Typography>
                        </div>
                        <Typography style={styles.reward}>1000</Typography>
                        <Typography style={styles.unit}>CCT</Typography>
                        <div style={styles.action}>
                            <Typography style={styles.button}>Claim</Typography>
                        </div>
                    </li>
                </ul>
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
        width: '400px',
        margin: '30px 30px',
        borderRadius: '10px',
        boxShadow: '0 3px 20px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden'
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
    action: {
        marginTop: '20px',
        padding: '20px'
    },
    button: {
        backgroundColor: '#3cc47c',
        padding: '10px',
        color: '#fff',
        fontSize: '1.2em',
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '3px',
    },
    trainBG: {
        width: "100%",
        height: "200px",
        background: `url(${TrainBG}) no-repeat center`,
        backgroundSize: '400px 232px'
    },
    waterBG: {
        width: "100%",
        height: "200px",
        background: `url(${WaterBG}) no-repeat center`,
        backgroundSize: '400px 285px'
    },
    forestBG: {
        width: "100%",
        height: "200px",
        background: `url(${ForestBG}) no-repeat center`,
        backgroundSize: '400px 267px'
    }
}