import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import wwf from '../images/wwf.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBus, faRecycle, faTree } from '@fortawesome/free-solid-svg-icons'

library.add(faBus)
library.add(faRecycle)
library.add(faTree)

export default class ClaimList extends Component {
    render() {

        const { onClickClaim } = this.props;

        return (
            <div>
                <div style={styles.wwf}></div>
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
    wwf: {
        marginTop: 50,
        marginBottom: 50,
        width: "100%",
        height: "200px",
        background: `url(${wwf}) no-repeat center`,
        backgroundSize: '150px 200px'
    },
}
