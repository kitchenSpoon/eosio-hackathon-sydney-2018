import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export default class ClaimList extends Component {
    render() {
        return (
            <div>
                <ul style={styles.claim_list}>
                    <li style={styles.claim_list_item}>
                        <div style={styles.icon}></div>
                        <div style={styles.content}>
                            <Typography style={styles.title}>Train from Epping to Central</Typography>
                            <Typography style={styles.description}>20km 0.02T Carbon Saved</Typography>
                        </div>
                        <Typography style={styles.reward}><strong>20</strong>CCT</Typography>
                        <div style={styles.action}>
                            <Typography style={styles.button}>Claim</Typography>
                        </div>
                    </li>
                    <li style={styles.claim_list_item}>
                        <div style={styles.icon}></div>
                        <div style={styles.content}>
                            <Typography style={styles.title}>Bottle refill at starbucks</Typography>
                            <Typography style={styles.description}>17g Carbon Saved</Typography>
                        </div>
                        <Typography style={styles.reward}><strong>0.01</strong>CCT</Typography>
                        <div style={styles.action}>
                            <Typography style={styles.button}>Claim</Typography>
                        </div>
                    </li>
                    <li style={styles.claim_list_item}>
                        <div style={styles.icon}></div>
                        <div style={styles.content}>
                            <Typography style={styles.title}>Plant tree</Typography>
                            <Typography style={styles.description}>1T Carbon for year</Typography>
                        </div>
                        <Typography style={styles.reward}><strong>1000</strong>CCT</Typography>
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
        width: '700px',
        margin: '0 auto',
    },
    claim_list_item: {
        listStyle: 'none',
        width: '700px',
        padding: '20px 0',
        margin: '30px 0 0 0',
        border: '1px solid #ddd',
        borderRadius: '10px',
        boxShadow: '0 3px 20px rgba(0, 0, 0, 0.2)'
    },
    icon: {
        display: 'inline-block',
        width: '50px',
    },
    content: {
        display: 'inline-block',
        width: '400px',
    },
    title: {
        fontSize: '1.5em',
        fontWeight: '400'
    },
    description: {
        color: '#aaa'
    },
    reward: {
        display: 'inline-block',
        fontSize: '2em',
        width: '150px'
    },
    action: {
        display: 'inline-block',
        width: '90px',
        paddingRight: '10px'
    },
    button: {
        backgroundColor: '#3cc47c',
        padding: '10px',
        color: '#fff',
        fontSize: '1.2em',
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '3px',
    }
}