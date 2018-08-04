import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

export default class ClaimList extends Component {
    render() {
        return (
            <div>
                <ul style={styles.claim_list}>
                    <li style={styles.claim_list_item}>
                        <div style={styles.icon}></div>
                        <div style={styles.content}>
                            <div style={styles.title}>Train from Epping to Central</div>
                            <div style={styles.description}>20km 0.02T Carbon Saved</div>
                        </div>
                        <div style={styles.reward}><strong>20</strong>CCT</div>
                        <div style={styles.action}>
                            <div style={styles.button}>Claim</div>
                        </div>
                    </li>
                    <li style={styles.claim_list_item}>
                        <div style={styles.icon}></div>
                        <div style={styles.content}>
                            <div style={styles.title}>Bottle refill at starbucks</div>
                            <div style={styles.description}>17g Carbon Saved</div>
                        </div>
                        <div style={styles.reward}><strong>0.01</strong>CCT</div>
                        <div style={styles.action}>
                            <div style={styles.button}>Claim</div>
                        </div>
                    </li>
                    <li style={styles.claim_list_item}>
                        <div style={styles.icon}></div>
                        <div style={styles.content}>
                            <div style={styles.title}>Plant tree</div>
                            <div style={styles.description}>1T Carbon for year</div>
                        </div>
                        <div style={styles.reward}><strong>1000</strong>CCT</div>
                        <div style={styles.action}>
                            <div style={styles.button}>Claim</div>
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