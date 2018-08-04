import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export default class Intro extends Component {
    render() {
        return (
            <div style={styles.body}>
                
                <div onClick={this.props.onNext}>Next</div>
            </div>
        )
    }
}

const styles = {
    body: {
        backgroundColor: '#3cc47c',
        height: 1000
    }
};