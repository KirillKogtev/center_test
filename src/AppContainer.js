import React, {Component} from 'react';
import {connect} from 'react-redux';
import App from './App';

class AppContainer extends Component {
    render() {
        return (
            <App {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(AppContainer);