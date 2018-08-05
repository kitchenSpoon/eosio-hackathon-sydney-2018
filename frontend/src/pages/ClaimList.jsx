import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TrainBG from '../images/train.jpg';
import AirCondition from '../images/airCondition.jpg';
import WaterBG from '../images/water.jpg';
import ForestBG from '../images/forest.jpg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faRecycle, faTree } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@material-ui/core';

library.add(faBus)
library.add(faRecycle)
library.add(faTree)

export default class ClaimList extends Component {
    render() {

        const { onClickClaim } = this.props;

        return (
            <div>
                <ul style={styles.claim_list}>
                <li style={styles.claim_list_item}>
                        <div style={styles.waterBG}></div>
                        <div style={styles.icon}><FontAwesomeIcon icon="recycle" /></div>
                        <div style={styles.content}>
                            <Typography style={styles.title}>Bottle refill at starbucks</Typography>
                            <Typography style={styles.description}>19g/week Saved</Typography>
                        </div>
                        <Typography style={styles.reward}>19</Typography>
                        <Typography style={styles.unit}>CCT</Typography>
                        <Button
                            variant={'contained'}
                            onClick={() => onClickClaim('19.0000 CCT')}
                            fullWidth={true}
                            style={styles.buttonContainer}
                        >
                            Claim
                        </Button>
                    </li>
                    <li style={styles.claim_list_item}>
                        <div style={styles.forestBG}></div>
                        <div style={styles.icon}><FontAwesomeIcon icon="tree" /></div>
                        <div style={styles.content}>
                            <Typography style={styles.title}>Plant tree</Typography>
                            <Typography style={styles.description}>48 CO2 lbs/year Carbon for year</Typography>
                        </div>
                        <Typography style={styles.reward}>48</Typography>
                        <Typography style={styles.unit}>CCT</Typography>
                        <Button
                            variant={'contained'}
                            onClick={() => onClickClaim('48.0000 CCT')}
                            fullWidth={true}
                            style={styles.buttonContainer}
                        >
                            Claim
                        </Button>
                    </li>
                    <li style={styles.claim_list_item}>
                        <div style={styles.airConditionBG}></div>
                        <div style={styles.icon}><FontAwesomeIcon icon="bus" /></div>
                        <div style={styles.content}>
                            <Typography style={styles.title}>Using less electricity</Typography>
                            <Typography style={styles.description}>168 CO2 kg/week Saved</Typography>
                        </div>
                        <Typography style={styles.reward}>168</Typography>
                        <Typography style={styles.unit}>CCT</Typography>
                        <Button
                            variant={'contained'}
                            onClick={() => onClickClaim('58.0000 CCT')}
                            fullWidth={true}
                            style={styles.buttonContainer}
                        >
                            Claim
                        </Button>
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
        overflow: 'hidden',
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
        color: '#aaa',
        marginBottom: 20,
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
    airConditionBG: {
        width: "100%",
        height: "200px",
        background: `url(${AirCondition}) no-repeat center`,
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
